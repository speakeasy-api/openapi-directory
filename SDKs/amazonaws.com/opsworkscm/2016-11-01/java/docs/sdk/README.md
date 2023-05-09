# SDK

## Overview

<fullname>AWS OpsWorks CM</fullname> <p>AWS OpsWorks for configuration management (CM) is a service that runs and manages configuration management servers. You can use AWS OpsWorks CM to create and manage AWS OpsWorks for Chef Automate and AWS OpsWorks for Puppet Enterprise servers, and add or remove nodes for the servers to manage.</p> <p> <b>Glossary of terms</b> </p> <ul> <li> <p> <b>Server</b>: A configuration management server that can be highly-available. The configuration management server runs on an Amazon Elastic Compute Cloud (EC2) instance, and may use various other AWS services, such as Amazon Relational Database Service (RDS) and Elastic Load Balancing. A server is a generic abstraction over the configuration manager that you want to use, much like Amazon RDS. In AWS OpsWorks CM, you do not start or stop servers. After you create servers, they continue to run until they are deleted.</p> </li> <li> <p> <b>Engine</b>: The engine is the specific configuration manager that you want to use. Valid values in this release include <code>ChefAutomate</code> and <code>Puppet</code>.</p> </li> <li> <p> <b>Backup</b>: This is an application-level backup of the data that the configuration manager stores. AWS OpsWorks CM creates an S3 bucket for backups when you launch the first server. A backup maintains a snapshot of a server's configuration-related attributes at the time the backup starts.</p> </li> <li> <p> <b>Events</b>: Events are always related to a server. Events are written during server creation, when health checks run, when backups are created, when system maintenance is performed, etc. When you delete a server, the server's events are also deleted.</p> </li> <li> <p> <b>Account attributes</b>: Every account has attributes that are assigned in the AWS OpsWorks CM database. These attributes store information about configuration limits (servers, backups, etc.) and your customer account. </p> </li> </ul> <p> <b>Endpoints</b> </p> <p>AWS OpsWorks CM supports the following endpoints, all HTTPS. You must connect to one of the following endpoints. Your servers can only be accessed or managed within the endpoint in which they are created.</p> <ul> <li> <p>opsworks-cm.us-east-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-east-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.us-west-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-northeast-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-southeast-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.ap-southeast-2.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-central-1.amazonaws.com</p> </li> <li> <p>opsworks-cm.eu-west-1.amazonaws.com</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/opsworks-service.html">AWS OpsWorks endpoints and quotas</a> in the AWS General Reference.</p> <p> <b>Throttling limits</b> </p> <p>All API operations allow for five requests per second with a burst of 10 requests per second.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/opsworks-cm/>
### Available Operations

* [associateNode](#associatenode) - <p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p> <p> On a Chef server: This command is an alternative to <code>knife bootstrap</code>.</p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code> </p> <p> On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR. </p> <p> Example (Puppet): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code> </p> <p> A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server's instance. </p>
* [createBackup](#createbackup) - <p> Creates an application-level backup of a server. While the server is in the <code>BACKING_UP</code> state, the server cannot be changed, and no additional backup can be created. </p> <p> Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50 manual backups. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached. An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY. A <code>ResourceNotFoundException</code> is thrown when the server is not found. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>
* [createServer](#createserver) - <p> Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code> is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p> <p> If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group. </p> <p> <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p> <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p>By default, your server is accessible from any IP address. We recommend that you update your security group rules to allow access from known IP addresses and address ranges only. To edit security group rules, open Security Groups in the navigation pane of the EC2 management console. </p> <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key, specify values for <code>CustomDomain</code>, <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>
* [deleteBackup](#deletebackup) - <p> Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>
* [deleteServer](#deleteserver) - <p> Deletes the server and the underlying AWS CloudFormation stacks (including the server's EC2 instance). When you run this command, the server state is updated to <code>DELETING</code>. After the server is deleted, it is no longer returned by <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a server deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p> <p> </p>
* [describeAccountAttributes](#describeaccountattributes) - <p> Describes your OpsWorks-CM account attributes. </p> <p> This operation is synchronous. </p>
* [describeBackups](#describebackups) - <p> Describes backups. The results are ordered by time, with newest backups first. If you do not specify a BackupId or ServerName, the command returns all backups. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
* [describeEvents](#describeevents) - <p> Describes events for a specified server. Results are ordered by time, with newest events first. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
* [describeNodeAssociationStatus](#describenodeassociationstatus) - <p> Returns the current status of an existing association or disassociation request. </p> <p> A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found, or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
* [describeServers](#describeservers) - <p> Lists all configuration management servers that are identified with your account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks CM does not query other services. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
* [disassociateNode](#disassociatenode) - <p> Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated, the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>. </p> <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
* [exportServerEngineAttribute](#exportserverengineattribute) - <p> Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server. </p> <p> This operation is synchronous. </p> <p> A <code>ValidationException</code> is raised when parameters of the request are not valid. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED, FAILED or DELETING. </p>
* [listTagsForResource](#listtagsforresource) - Returns a list of tags that are applied to the specified AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise servers or backups.
* [restoreServer](#restoreserver) - <p> Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state. When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work. </p> <p>Restoring from a backup is performed by creating a new EC2 instance. If restoration is successful, and the server is in a <code>HEALTHY</code> state, AWS OpsWorks CM switches traffic over to the new instance. After restoration is finished, the old EC2 instance is maintained in a <code>Running</code> or <code>Stopped</code> state, but is eventually terminated.</p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
* [startMaintenance](#startmaintenance) - <p> Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress. </p> <p> Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>
* [tagResource](#tagresource) - Applies tags to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server, or to server backups.
* [untagResource](#untagresource) - Removes specified tags from an AWS OpsWorks-CM server or backup.
* [updateServer](#updateserver) - <p> Updates settings for a server. </p> <p> This operation is synchronous. </p>
* [updateServerEngineAttributes](#updateserverengineattributes) - <p> Updates engine-specific attributes on a specified server. The server enters the <code>MODIFYING</code> state when this operation is in progress. Only one update can occur at a time. You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's admin password (<code>PUPPET_ADMIN_PASSWORD</code>). </p> <p> This operation is asynchronous. </p> <p> This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

## associateNode

<p> Associates a new node with the server. For more information about how to disassociate a node, see <a>DisassociateNode</a>.</p> <p> On a Chef server: This command is an alternative to <code>knife bootstrap</code>.</p> <p> Example (Chef): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>CHEF_ORGANIZATION</i>,Value=default" "Name=<i>CHEF_NODE_PUBLIC_KEY</i>,Value=<i>public-key-pem</i>"</code> </p> <p> On a Puppet server, this command is an alternative to the <code>puppet cert sign</code> command that signs a Puppet node CSR. </p> <p> Example (Puppet): <code>aws opsworks-cm associate-node --server-name <i>MyServer</i> --node-name <i>MyManagedNode</i> --engine-attributes "Name=<i>PUPPET_NODE_CSR</i>,Value=<i>csr-pem</i>"</code> </p> <p> A node can can only be associated with servers that are in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. The AssociateNode API call can be integrated into Auto Scaling configurations, AWS Cloudformation templates, or the user data of a server's instance. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AssociateNodeRequest;
import org.openapis.openapi.models.operations.AssociateNodeResponse;
import org.openapis.openapi.models.operations.AssociateNodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.AssociateNodeRequest;
import org.openapis.openapi.models.shared.EngineAttribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AssociateNodeRequest req = new AssociateNodeRequest(                new AssociateNodeRequest(                new org.openapis.openapi.models.shared.EngineAttribute[]{{
                                                add(new EngineAttribute() {{
                                                    name = "Christopher Hills";
                                                    value = "quo";
                                                }}),
                                            }}, "odit", "at");, AssociateNodeXAmzTargetEnum.OPS_WORKS_CMV20161101_ASSOCIATE_NODE) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "molestiae";
                xAmzDate = "quod";
                xAmzSecurityToken = "quod";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "totam";
            }};            

            AssociateNodeResponse res = sdk.sdk.associateNode(req);

            if (res.associateNodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBackup

<p> Creates an application-level backup of a server. While the server is in the <code>BACKING_UP</code> state, the server cannot be changed, and no additional backup can be created. </p> <p> Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50 manual backups. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached. An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY. A <code>ResourceNotFoundException</code> is thrown when the server is not found. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackupRequest;
import org.openapis.openapi.models.operations.CreateBackupResponse;
import org.openapis.openapi.models.operations.CreateBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateBackupRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBackupRequest req = new CreateBackupRequest(                new CreateBackupRequest("dolorum") {{
                                description = "dicta";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("fugit", "deleniti") {{
                                        key = "officia";
                                        value = "occaecati";
                                    }}),
                                    add(new Tag("totam", "beatae") {{
                                        key = "hic";
                                        value = "optio";
                                    }}),
                                    add(new Tag("modi", "qui") {{
                                        key = "commodi";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, CreateBackupXAmzTargetEnum.OPS_WORKS_CMV20161101_CREATE_BACKUP) {{
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "cum";
                xAmzCredential = "esse";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateBackupResponse res = sdk.sdk.createBackup(req);

            if (res.createBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServer

<p> Creates and immedately starts a new server. The server is ready to use when it is in the <code>HEALTHY</code> state. By default, you can create a maximum of 10 servers. </p> <p> This operation is asynchronous. </p> <p> A <code>LimitExceededException</code> is thrown when you have created the maximum number of servers (10). A <code>ResourceAlreadyExistsException</code> is thrown when a server with the same name already exists in the account. A <code>ResourceNotFoundException</code> is thrown when you specify a backup ID that is not valid or is for a backup that does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p> <p> If you do not specify a security group by adding the <code>SecurityGroupIds</code> parameter, AWS OpsWorks creates a new security group. </p> <p> <i>Chef Automate:</i> The default security group opens the Chef server to the world on TCP port 443. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p> <i>Puppet Enterprise:</i> The default security group opens TCP ports 22, 443, 4433, 8140, 8142, 8143, and 8170. If a KeyName is present, AWS OpsWorks enables SSH access. SSH is also open to the world on TCP port 22. </p> <p>By default, your server is accessible from any IP address. We recommend that you update your security group rules to allow access from known IP addresses and address ranges only. To edit security group rules, open Security Groups in the navigation pane of the EC2 management console. </p> <p>To specify your own domain for a server, and provide your own self-signed or CA-signed certificate and private key, specify values for <code>CustomDomain</code>, <code>CustomCertificate</code>, and <code>CustomPrivateKey</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServerRequest;
import org.openapis.openapi.models.operations.CreateServerResponse;
import org.openapis.openapi.models.operations.CreateServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateServerRequest;
import org.openapis.openapi.models.shared.EngineAttribute;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServerRequest req = new CreateServerRequest(                new CreateServerRequest("natus", "sed", "iste", "dolor", "natus") {{
                                associatePublicIpAddress = false;
                                backupId = "laboriosam";
                                backupRetentionCount = 943749L;
                                customCertificate = "saepe";
                                customDomain = "fuga";
                                customPrivateKey = "in";
                                disableAutomatedBackup = false;
                                engineAttributes = new org.openapis.openapi.models.shared.EngineAttribute[]{{
                                    add(new EngineAttribute() {{
                                        name = "Brad Turcotte Jr.";
                                        value = "reiciendis";
                                    }}),
                                    add(new EngineAttribute() {{
                                        name = "Shaun Osinski";
                                        value = "corporis";
                                    }}),
                                }};
                                engineModel = "explicabo";
                                engineVersion = "nobis";
                                keyPair = "enim";
                                preferredBackupWindow = "omnis";
                                preferredMaintenanceWindow = "nemo";
                                securityGroupIds = new String[]{{
                                    add("excepturi"),
                                    add("accusantium"),
                                }};
                                subnetIds = new String[]{{
                                    add("culpa"),
                                    add("doloribus"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolorem", "culpa") {{
                                        key = "architecto";
                                        value = "mollitia";
                                    }}),
                                    add(new Tag("mollitia", "occaecati") {{
                                        key = "consequuntur";
                                        value = "repellat";
                                    }}),
                                    add(new Tag("quam", "molestiae") {{
                                        key = "numquam";
                                        value = "commodi";
                                    }}),
                                    add(new Tag("quia", "quis") {{
                                        key = "velit";
                                        value = "error";
                                    }}),
                                }};
                            }};, CreateServerXAmzTargetEnum.OPS_WORKS_CMV20161101_CREATE_SERVER) {{
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "animi";
                xAmzDate = "enim";
                xAmzSecurityToken = "odit";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "sequi";
            }};            

            CreateServerResponse res = sdk.sdk.createServer(req);

            if (res.createServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBackup

<p> Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is thrown when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBackupRequest;
import org.openapis.openapi.models.operations.DeleteBackupResponse;
import org.openapis.openapi.models.operations.DeleteBackupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBackupRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBackupRequest req = new DeleteBackupRequest(                new DeleteBackupRequest("ipsam");, DeleteBackupXAmzTargetEnum.OPS_WORKS_CMV20161101_DELETE_BACKUP) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "aut";
                xAmzDate = "quasi";
                xAmzSecurityToken = "error";
                xAmzSignature = "temporibus";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteBackupResponse res = sdk.sdk.deleteBackup(req);

            if (res.deleteBackupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServer

<p> Deletes the server and the underlying AWS CloudFormation stacks (including the server's EC2 instance). When you run this command, the server state is updated to <code>DELETING</code>. After the server is deleted, it is no longer returned by <code>DescribeServer</code> requests. If the AWS CloudFormation stack cannot be deleted, the server cannot be deleted. </p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when a server deletion is already in progress. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p> <p> </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteServerRequest;
import org.openapis.openapi.models.operations.DeleteServerResponse;
import org.openapis.openapi.models.operations.DeleteServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteServerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServerRequest req = new DeleteServerRequest(                new DeleteServerRequest("reiciendis");, DeleteServerXAmzTargetEnum.OPS_WORKS_CMV20161101_DELETE_SERVER) {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "vero";
                xAmzCredential = "nihil";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "omnis";
            }};            

            DeleteServerResponse res = sdk.sdk.deleteServer(req);

            if (res.deleteServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccountAttributes

<p> Describes your OpsWorks-CM account attributes. </p> <p> This operation is synchronous. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccountAttributesRequest;
import org.openapis.openapi.models.operations.DescribeAccountAttributesResponse;
import org.openapis.openapi.models.operations.DescribeAccountAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccountAttributesRequest req = new DescribeAccountAttributesRequest(                new java.util.HashMap<String, Object>() {{
                                put("perferendis", "doloremque");
                                put("reprehenderit", "ut");
                                put("maiores", "dicta");
                            }}, DescribeAccountAttributesXAmzTargetEnum.OPS_WORKS_CMV20161101_DESCRIBE_ACCOUNT_ATTRIBUTES) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "iusto";
                xAmzDate = "dicta";
                xAmzSecurityToken = "harum";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "accusamus";
            }};            

            DescribeAccountAttributesResponse res = sdk.sdk.describeAccountAttributes(req);

            if (res.describeAccountAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeBackups

<p> Describes backups. The results are ordered by time, with newest backups first. If you do not specify a BackupId or ServerName, the command returns all backups. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the backup does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeBackupsRequest;
import org.openapis.openapi.models.operations.DescribeBackupsResponse;
import org.openapis.openapi.models.operations.DescribeBackupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeBackupsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeBackupsRequest req = new DescribeBackupsRequest(                new DescribeBackupsRequest() {{
                                backupId = "repudiandae";
                                maxResults = 64147L;
                                nextToken = "ipsum";
                                serverName = "quidem";
                            }};, DescribeBackupsXAmzTargetEnum.OPS_WORKS_CMV20161101_DESCRIBE_BACKUPS) {{
                maxResults = "molestias";
                nextToken = "excepturi";
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            DescribeBackupsResponse res = sdk.sdk.describeBackups(req);

            if (res.describeBackupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeEvents

<p> Describes events for a specified server. Results are ordered by time, with newest events first. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeEventsRequest;
import org.openapis.openapi.models.operations.DescribeEventsResponse;
import org.openapis.openapi.models.operations.DescribeEventsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeEventsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeEventsRequest req = new DescribeEventsRequest(                new DescribeEventsRequest("veritatis") {{
                                maxResults = 929297L;
                                nextToken = "incidunt";
                            }};, DescribeEventsXAmzTargetEnum.OPS_WORKS_CMV20161101_DESCRIBE_EVENTS) {{
                maxResults = "enim";
                nextToken = "consequatur";
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "explicabo";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "quibusdam";
                xAmzSignedHeaders = "labore";
            }};            

            DescribeEventsResponse res = sdk.sdk.describeEvents(req);

            if (res.describeEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeNodeAssociationStatus

<p> Returns the current status of an existing association or disassociation request. </p> <p> A <code>ResourceNotFoundException</code> is thrown when no recent association or disassociation request with the specified token is found, or when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeNodeAssociationStatusRequest;
import org.openapis.openapi.models.operations.DescribeNodeAssociationStatusResponse;
import org.openapis.openapi.models.operations.DescribeNodeAssociationStatusXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeNodeAssociationStatusRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeNodeAssociationStatusRequest req = new DescribeNodeAssociationStatusRequest(                new DescribeNodeAssociationStatusRequest("qui", "aliquid");, DescribeNodeAssociationStatusXAmzTargetEnum.OPS_WORKS_CMV20161101_DESCRIBE_NODE_ASSOCIATION_STATUS) {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            DescribeNodeAssociationStatusResponse res = sdk.sdk.describeNodeAssociationStatus(req);

            if (res.describeNodeAssociationStatusResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeServers

<p> Lists all configuration management servers that are identified with your account. Only the stored results from Amazon DynamoDB are returned. AWS OpsWorks CM does not query other services. </p> <p> This operation is synchronous. </p> <p> A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServersRequest;
import org.openapis.openapi.models.operations.DescribeServersResponse;
import org.openapis.openapi.models.operations.DescribeServersXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServersRequest req = new DescribeServersRequest(                new DescribeServersRequest() {{
                                maxResults = 677817L;
                                nextToken = "excepturi";
                                serverName = "tempora";
                            }};, DescribeServersXAmzTargetEnum.OPS_WORKS_CMV20161101_DESCRIBE_SERVERS) {{
                maxResults = "facilis";
                nextToken = "tempore";
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            DescribeServersResponse res = sdk.sdk.describeServers(req);

            if (res.describeServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disassociateNode

<p> Disassociates a node from an AWS OpsWorks CM server, and removes the node from the server's managed nodes. After a node is disassociated, the node key pair is no longer valid for accessing the configuration manager's API. For more information about how to associate a node, see <a>AssociateNode</a>. </p> <p>A node can can only be disassociated from a server that is in a <code>HEALTHY</code> state. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisassociateNodeRequest;
import org.openapis.openapi.models.operations.DisassociateNodeResponse;
import org.openapis.openapi.models.operations.DisassociateNodeXAmzTargetEnum;
import org.openapis.openapi.models.shared.DisassociateNodeRequest;
import org.openapis.openapi.models.shared.EngineAttribute;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisassociateNodeRequest req = new DisassociateNodeRequest(                new DisassociateNodeRequest("necessitatibus", "sint") {{
                                engineAttributes = new org.openapis.openapi.models.shared.EngineAttribute[]{{
                                    add(new EngineAttribute() {{
                                        name = "Raquel Wilderman";
                                        value = "in";
                                    }}),
                                    add(new EngineAttribute() {{
                                        name = "Mrs. Emilio Price";
                                        value = "facere";
                                    }}),
                                    add(new EngineAttribute() {{
                                        name = "Beth Padberg";
                                        value = "occaecati";
                                    }}),
                                }};
                            }};, DisassociateNodeXAmzTargetEnum.OPS_WORKS_CMV20161101_DISASSOCIATE_NODE) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            DisassociateNodeResponse res = sdk.sdk.disassociateNode(req);

            if (res.disassociateNodeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportServerEngineAttribute

<p> Exports a specified server engine attribute as a base64-encoded string. For example, you can export user data that you can use in EC2 to associate nodes with a server. </p> <p> This operation is synchronous. </p> <p> A <code>ValidationException</code> is raised when parameters of the request are not valid. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. An <code>InvalidStateException</code> is thrown when the server is in any of the following states: CREATING, TERMINATED, FAILED or DELETING. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportServerEngineAttributeRequest;
import org.openapis.openapi.models.operations.ExportServerEngineAttributeResponse;
import org.openapis.openapi.models.operations.ExportServerEngineAttributeXAmzTargetEnum;
import org.openapis.openapi.models.shared.EngineAttribute;
import org.openapis.openapi.models.shared.ExportServerEngineAttributeRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ExportServerEngineAttributeRequest req = new ExportServerEngineAttributeRequest(                new ExportServerEngineAttributeRequest("deleniti", "sapiente") {{
                                inputAttributes = new org.openapis.openapi.models.shared.EngineAttribute[]{{
                                    add(new EngineAttribute() {{
                                        name = "Tyler Kassulke";
                                        value = "molestiae";
                                    }}),
                                }};
                            }};, ExportServerEngineAttributeXAmzTargetEnum.OPS_WORKS_CMV20161101_EXPORT_SERVER_ENGINE_ATTRIBUTE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "magnam";
                xAmzDate = "distinctio";
                xAmzSecurityToken = "id";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "labore";
            }};            

            ExportServerEngineAttributeResponse res = sdk.sdk.exportServerEngineAttribute(req);

            if (res.exportServerEngineAttributeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns a list of tags that are applied to the specified AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise servers or backups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.operations.ListTagsForResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListTagsForResourceRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("natus") {{
                                maxResults = 749170L;
                                nextToken = "eum";
                            }};, ListTagsForResourceXAmzTargetEnum.OPS_WORKS_CMV20161101_LIST_TAGS_FOR_RESOURCE) {{
                maxResults = "vero";
                nextToken = "aspernatur";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "et";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "quos";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreServer

<p> Restores a backup to a server that is in a <code>CONNECTION_LOST</code>, <code>HEALTHY</code>, <code>RUNNING</code>, <code>UNHEALTHY</code>, or <code>TERMINATED</code> state. When you run RestoreServer, the server's EC2 instance is deleted, and a new EC2 instance is configured. RestoreServer maintains the existing server endpoint, so configuration management of the server's client devices (nodes) should continue to work. </p> <p>Restoring from a backup is performed by creating a new EC2 instance. If restoration is successful, and the server is in a <code>HEALTHY</code> state, AWS OpsWorks CM switches traffic over to the new instance. After restoration is finished, the old EC2 instance is maintained in a <code>Running</code> or <code>Stopped</code> state, but is eventually terminated.</p> <p> This operation is asynchronous. </p> <p> An <code>InvalidStateException</code> is thrown when the server is not in a valid state. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreServerRequest;
import org.openapis.openapi.models.operations.RestoreServerResponse;
import org.openapis.openapi.models.operations.RestoreServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.RestoreServerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RestoreServerRequest req = new RestoreServerRequest(                new RestoreServerRequest("accusantium", "mollitia") {{
                                instanceType = "reiciendis";
                                keyPair = "mollitia";
                            }};, RestoreServerXAmzTargetEnum.OPS_WORKS_CMV20161101_RESTORE_SERVER) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            RestoreServerResponse res = sdk.sdk.restoreServer(req);

            if (res.restoreServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startMaintenance

<p> Manually starts server maintenance. This command can be useful if an earlier maintenance attempt failed, and the underlying cause of maintenance failure has been resolved. The server is in an <code>UNDER_MAINTENANCE</code> state while maintenance is in progress. </p> <p> Maintenance can only be started on servers in <code>HEALTHY</code> and <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is thrown. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartMaintenanceRequest;
import org.openapis.openapi.models.operations.StartMaintenanceResponse;
import org.openapis.openapi.models.operations.StartMaintenanceXAmzTargetEnum;
import org.openapis.openapi.models.shared.EngineAttribute;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartMaintenanceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartMaintenanceRequest req = new StartMaintenanceRequest(                new StartMaintenanceRequest("doloribus") {{
                                engineAttributes = new org.openapis.openapi.models.shared.EngineAttribute[]{{
                                    add(new EngineAttribute() {{
                                        name = "Jasmine Lind";
                                        value = "architecto";
                                    }}),
                                    add(new EngineAttribute() {{
                                        name = "Elvira Herman";
                                        value = "repellat";
                                    }}),
                                    add(new EngineAttribute() {{
                                        name = "Louis Turner Sr.";
                                        value = "praesentium";
                                    }}),
                                    add(new EngineAttribute() {{
                                        name = "Victor Casper";
                                        value = "pariatur";
                                    }}),
                                }};
                            }};, StartMaintenanceXAmzTargetEnum.OPS_WORKS_CMV20161101_START_MAINTENANCE) {{
                xAmzAlgorithm = "maxime";
                xAmzContentSha256 = "ea";
                xAmzCredential = "excepturi";
                xAmzDate = "odit";
                xAmzSecurityToken = "ea";
                xAmzSignature = "accusantium";
                xAmzSignedHeaders = "ab";
            }};            

            StartMaintenanceResponse res = sdk.sdk.startMaintenance(req);

            if (res.startMaintenanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Applies tags to an AWS OpsWorks for Chef Automate or AWS OpsWorks for Puppet Enterprise server, or to server backups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.operations.TagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("quidem",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("nam", "eaque") {{
                                                    key = "voluptate";
                                                    value = "autem";
                                                }}),
                                                add(new Tag("voluptatibus", "perferendis") {{
                                                    key = "pariatur";
                                                    value = "nemo";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.OPS_WORKS_CMV20161101_TAG_RESOURCE) {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "amet";
                xAmzCredential = "aut";
                xAmzDate = "cumque";
                xAmzSecurityToken = "corporis";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "libero";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes specified tags from an AWS OpsWorks-CM server or backup.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.operations.UntagResourceXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UntagResourceRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("dolores",                 new String[]{{
                                                add("totam"),
                                                add("dignissimos"),
                                            }});, UntagResourceXAmzTargetEnum.OPS_WORKS_CMV20161101_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "quis";
                xAmzCredential = "nesciunt";
                xAmzDate = "eos";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "minus";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServer

<p> Updates settings for a server. </p> <p> This operation is synchronous. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServerRequest;
import org.openapis.openapi.models.operations.UpdateServerResponse;
import org.openapis.openapi.models.operations.UpdateServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServerRequest req = new UpdateServerRequest(                new UpdateServerRequest("dolor") {{
                                backupRetentionCount = 874573L;
                                disableAutomatedBackup = false;
                                preferredBackupWindow = "nostrum";
                                preferredMaintenanceWindow = "hic";
                            }};, UpdateServerXAmzTargetEnum.OPS_WORKS_CMV20161101_UPDATE_SERVER) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "facilis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "consequuntur";
            }};            

            UpdateServerResponse res = sdk.sdk.updateServer(req);

            if (res.updateServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServerEngineAttributes

<p> Updates engine-specific attributes on a specified server. The server enters the <code>MODIFYING</code> state when this operation is in progress. Only one update can occur at a time. You can use this command to reset a Chef server's public key (<code>CHEF_PIVOTAL_KEY</code>) or a Puppet server's admin password (<code>PUPPET_ADMIN_PASSWORD</code>). </p> <p> This operation is asynchronous. </p> <p> This operation can only be called for servers in <code>HEALTHY</code> or <code>UNHEALTHY</code> states. Otherwise, an <code>InvalidStateException</code> is raised. A <code>ResourceNotFoundException</code> is thrown when the server does not exist. A <code>ValidationException</code> is raised when parameters of the request are not valid. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServerEngineAttributesRequest;
import org.openapis.openapi.models.operations.UpdateServerEngineAttributesResponse;
import org.openapis.openapi.models.operations.UpdateServerEngineAttributesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateServerEngineAttributesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServerEngineAttributesRequest req = new UpdateServerEngineAttributesRequest(                new UpdateServerEngineAttributesRequest("error", "eaque") {{
                                attributeValue = "occaecati";
                            }};, UpdateServerEngineAttributesXAmzTargetEnum.OPS_WORKS_CMV20161101_UPDATE_SERVER_ENGINE_ATTRIBUTES) {{
                xAmzAlgorithm = "rerum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "asperiores";
                xAmzDate = "earum";
                xAmzSecurityToken = "modi";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolorum";
            }};            

            UpdateServerEngineAttributesResponse res = sdk.sdk.updateServerEngineAttributes(req);

            if (res.updateServerEngineAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
