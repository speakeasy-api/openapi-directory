# SDK

## Overview

Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS. Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3. Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with Amazon Web Services for processing, analytics, machine learning, and archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and set up.

Amazon Web Services documentation
<https://docs.aws.amazon.com/transfer/>
### Available Operations

* [createAccess](#createaccess) - Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
* [createAgreement](#createagreement) - <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
* [createConnector](#createconnector) - Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.
* [createProfile](#createprofile) - Creates the local or partner profile to use for AS2 transfers.
* [createServer](#createserver) - Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
* [createUser](#createuser) - Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
* [createWorkflow](#createworkflow) -  Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 
* [deleteAccess](#deleteaccess) - Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* [deleteAgreement](#deleteagreement) - Delete the agreement that's specified in the provided <code>AgreementId</code>.
* [deleteCertificate](#deletecertificate) - Deletes the certificate that's specified in the <code>CertificateId</code> parameter.
* [deleteConnector](#deleteconnector) - Deletes the agreement that's specified in the provided <code>ConnectorId</code>.
* [deleteHostKey](#deletehostkey) - Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.
* [deleteProfile](#deleteprofile) - Deletes the profile that's specified in the <code>ProfileId</code> parameter.
* [deleteServer](#deleteserver) - <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
* [deleteSshPublicKey](#deletesshpublickey) - Deletes a user's Secure Shell (SSH) public key.
* [deleteUser](#deleteuser) - <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
* [deleteWorkflow](#deleteworkflow) - Deletes the specified workflow.
* [describeAccess](#describeaccess) - <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
* [describeAgreement](#describeagreement) - Describes the agreement that's identified by the <code>AgreementId</code>.
* [describeCertificate](#describecertificate) - Describes the certificate that's identified by the <code>CertificateId</code>.
* [describeConnector](#describeconnector) - Describes the connector that's identified by the <code>ConnectorId.</code> 
* [describeExecution](#describeexecution) - You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.
* [describeHostKey](#describehostkey) - Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.
* [describeProfile](#describeprofile) - Returns the details of the profile that's specified by the <code>ProfileId</code>.
* [describeSecurityPolicy](#describesecuritypolicy) - Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
* [describeServer](#describeserver) - <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
* [describeUser](#describeuser) - <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
* [describeWorkflow](#describeworkflow) - Describes the specified workflow.
* [importCertificate](#importcertificate) - Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
* [importHostKey](#importhostkey) - Adds a host key to the server that's specified by the <code>ServerId</code> parameter.
* [importSshPublicKey](#importsshpublickey) - <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
* [listAccesses](#listaccesses) - Lists the details for all the accesses you have on your server.
* [listAgreements](#listagreements) - Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.
* [listCertificates](#listcertificates) - Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.
* [listConnectors](#listconnectors) - Lists the connectors for the specified Region.
* [listExecutions](#listexecutions) - Lists all executions for the specified workflow.
* [listHostKeys](#listhostkeys) - Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.
* [listProfiles](#listprofiles) - Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.
* [listSecurityPolicies](#listsecuritypolicies) - Lists the security policies that are attached to your file transfer protocol-enabled servers.
* [listServers](#listservers) - Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
* [listTagsForResource](#listtagsforresource) - Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
* [listUsers](#listusers) - Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
* [listWorkflows](#listworkflows) - Lists all of your workflows.
* [sendWorkflowStepState](#sendworkflowstepstate) - <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
* [startFileTransfer](#startfiletransfer) - Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 
* [startServer](#startserver) - <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* [stopServer](#stopserver) - <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* [tagResource](#tagresource) - <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
* [testIdentityProvider](#testidentityprovider) - <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>
* [untagResource](#untagresource) - <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
* [updateAccess](#updateaccess) - Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* [updateAgreement](#updateagreement) - Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.
* [updateCertificate](#updatecertificate) - Updates the active and inactive dates for a certificate.
* [updateConnector](#updateconnector) - Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.
* [updateHostKey](#updatehostkey) - Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.
* [updateProfile](#updateprofile) - Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.
* [updateServer](#updateserver) - <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
* [updateUser](#updateuser) - <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>

## createAccess

Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAccessRequest;
import org.openapis.openapi.models.operations.CreateAccessResponse;
import org.openapis.openapi.models.operations.CreateAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateAccessRequest;
import org.openapis.openapi.models.shared.HomeDirectoryMapEntry;
import org.openapis.openapi.models.shared.HomeDirectoryTypeEnum;
import org.openapis.openapi.models.shared.PosixProfile;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAccessRequest req = new CreateAccessRequest(                new CreateAccessRequest("at", "maiores", "molestiae") {{
                                homeDirectory = "quod";
                                homeDirectoryMappings = new org.openapis.openapi.models.shared.HomeDirectoryMapEntry[]{{
                                    add(new HomeDirectoryMapEntry("porro", "dolorum") {{
                                        entry = "esse";
                                        target = "totam";
                                    }}),
                                    add(new HomeDirectoryMapEntry("officia", "occaecati") {{
                                        entry = "dicta";
                                        target = "nam";
                                    }}),
                                    add(new HomeDirectoryMapEntry("hic", "optio") {{
                                        entry = "fugit";
                                        target = "deleniti";
                                    }}),
                                    add(new HomeDirectoryMapEntry("commodi", "molestiae") {{
                                        entry = "totam";
                                        target = "beatae";
                                    }}),
                                }};
                                homeDirectoryType = HomeDirectoryTypeEnum.PATH;
                                policy = "qui";
                                posixProfile = new PosixProfile(774234L, 736918L) {{
                                    secondaryGids = new Long[]{{
                                        add(216550L),
                                        add(568434L),
                                    }};
                                }};;
                            }};, CreateAccessXAmzTargetEnum.TRANSFER_SERVICE_CREATE_ACCESS) {{
                xAmzAlgorithm = "aspernatur";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "ad";
                xAmzDate = "natus";
                xAmzSecurityToken = "sed";
                xAmzSignature = "iste";
                xAmzSignedHeaders = "dolor";
            }};            

            CreateAccessResponse res = sdk.sdk.createAccess(req);

            if (res.createAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createAgreement

<p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAgreementRequest;
import org.openapis.openapi.models.operations.CreateAgreementResponse;
import org.openapis.openapi.models.operations.CreateAgreementXAmzTargetEnum;
import org.openapis.openapi.models.shared.AgreementStatusTypeEnum;
import org.openapis.openapi.models.shared.CreateAgreementRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAgreementRequest req = new CreateAgreementRequest(                new CreateAgreementRequest("laboriosam", "hic", "saepe", "fuga", "in") {{
                                description = "corporis";
                                status = AgreementStatusTypeEnum.INACTIVE;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("architecto", "ipsa") {{
                                        key = "saepe";
                                        value = "quidem";
                                    }}),
                                    add(new Tag("mollitia", "laborum") {{
                                        key = "reiciendis";
                                        value = "est";
                                    }}),
                                }};
                            }};, CreateAgreementXAmzTargetEnum.TRANSFER_SERVICE_CREATE_AGREEMENT) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "corporis";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "enim";
                xAmzSignedHeaders = "omnis";
            }};            

            CreateAgreementResponse res = sdk.sdk.createAgreement(req);

            if (res.createAgreementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnector

Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectorRequest;
import org.openapis.openapi.models.operations.CreateConnectorResponse;
import org.openapis.openapi.models.operations.CreateConnectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.As2ConnectorConfig;
import org.openapis.openapi.models.shared.CompressionEnumEnum;
import org.openapis.openapi.models.shared.CreateConnectorRequest;
import org.openapis.openapi.models.shared.EncryptionAlgEnum;
import org.openapis.openapi.models.shared.MdnResponseEnum;
import org.openapis.openapi.models.shared.MdnSigningAlgEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SigningAlgEnum;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectorRequest req = new CreateConnectorRequest(                new CreateConnectorRequest("minima",                 new As2ConnectorConfig() {{
                                                compression = CompressionEnumEnum.DISABLED;
                                                encryptionAlgorithm = EncryptionAlgEnum.AES128_CBC;
                                                localProfileId = "iure";
                                                mdnResponse = MdnResponseEnum.NONE;
                                                mdnSigningAlgorithm = MdnSigningAlgEnum.DEFAULT_;
                                                messageSubject = "sapiente";
                                                partnerProfileId = "architecto";
                                                signingAlgorithm = SigningAlgEnum.SHA1;
                                            }};, "dolorem") {{
                                loggingRole = "culpa";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("occaecati", "numquam") {{
                                        key = "repellat";
                                        value = "mollitia";
                                    }}),
                                }};
                            }};, CreateConnectorXAmzTargetEnum.TRANSFER_SERVICE_CREATE_CONNECTOR) {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "quam";
                xAmzCredential = "molestiae";
                xAmzDate = "velit";
                xAmzSecurityToken = "error";
                xAmzSignature = "quia";
                xAmzSignedHeaders = "quis";
            }};            

            CreateConnectorResponse res = sdk.sdk.createConnector(req);

            if (res.createConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProfile

Creates the local or partner profile to use for AS2 transfers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProfileRequest;
import org.openapis.openapi.models.operations.CreateProfileResponse;
import org.openapis.openapi.models.operations.CreateProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateProfileRequest;
import org.openapis.openapi.models.shared.ProfileTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProfileRequest req = new CreateProfileRequest(                new CreateProfileRequest("laborum", ProfileTypeEnum.PARTNER) {{
                                certificateIds = new String[]{{
                                    add("odit"),
                                    add("quo"),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("id", "possimus") {{
                                        key = "tenetur";
                                        value = "ipsam";
                                    }}),
                                }};
                            }};, CreateProfileXAmzTargetEnum.TRANSFER_SERVICE_CREATE_PROFILE) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "error";
                xAmzDate = "temporibus";
                xAmzSecurityToken = "laborum";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "reiciendis";
            }};            

            CreateProfileResponse res = sdk.sdk.createProfile(req);

            if (res.createProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createServer

Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateServerRequest;
import org.openapis.openapi.models.operations.CreateServerResponse;
import org.openapis.openapi.models.operations.CreateServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.As2TransportEnum;
import org.openapis.openapi.models.shared.CreateServerRequest;
import org.openapis.openapi.models.shared.DomainEnum;
import org.openapis.openapi.models.shared.EndpointDetails;
import org.openapis.openapi.models.shared.EndpointTypeEnum;
import org.openapis.openapi.models.shared.IdentityProviderDetails;
import org.openapis.openapi.models.shared.IdentityProviderTypeEnum;
import org.openapis.openapi.models.shared.ProtocolDetails;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetStatOptionEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TlsSessionResumptionModeEnum;
import org.openapis.openapi.models.shared.WorkflowDetail;
import org.openapis.openapi.models.shared.WorkflowDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateServerRequest req = new CreateServerRequest(                new CreateServerRequest() {{
                                certificate = "vero";
                                domain = DomainEnum.S3;
                                endpointDetails = new EndpointDetails() {{
                                    addressAllocationIds = new String[]{{
                                        add("voluptatibus"),
                                        add("ipsa"),
                                        add("omnis"),
                                    }};
                                    securityGroupIds = new String[]{{
                                        add("cum"),
                                        add("perferendis"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("reprehenderit"),
                                    }};
                                    vpcEndpointId = "ut";
                                    vpcId = "maiores";
                                }};;
                                endpointType = EndpointTypeEnum.PUBLIC_;
                                hostKey = "corporis";
                                identityProviderDetails = new IdentityProviderDetails() {{
                                    directoryId = "dolore";
                                    function = "iusto";
                                    invocationRole = "dicta";
                                    url = "harum";
                                }};;
                                identityProviderType = IdentityProviderTypeEnum.API_GATEWAY;
                                loggingRole = "accusamus";
                                postAuthenticationLoginBanner = "commodi";
                                preAuthenticationLoginBanner = "repudiandae";
                                protocolDetails = new ProtocolDetails() {{
                                    as2Transports = new org.openapis.openapi.models.shared.As2TransportEnum[]{{
                                        add(As2TransportEnum.HTTP),
                                    }};
                                    passiveIp = "ipsum";
                                    setStatOption = SetStatOptionEnum.ENABLE_NO_OP;
                                    tlsSessionResumptionMode = TlsSessionResumptionModeEnum.ENABLED;
                                }};;
                                protocols = new org.openapis.openapi.models.shared.ProtocolEnum[]{{
                                    add(ProtocolEnum.AS2),
                                    add(ProtocolEnum.FTP),
                                    add(ProtocolEnum.FTPS),
                                }};
                                securityPolicyName = "rem";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("sint", "veritatis") {{
                                        key = "quasi";
                                        value = "repudiandae";
                                    }}),
                                    add(new Tag("enim", "consequatur") {{
                                        key = "itaque";
                                        value = "incidunt";
                                    }}),
                                    add(new Tag("explicabo", "deserunt") {{
                                        key = "est";
                                        value = "quibusdam";
                                    }}),
                                    add(new Tag("labore", "modi") {{
                                        key = "distinctio";
                                        value = "quibusdam";
                                    }}),
                                }};
                                workflowDetails = new WorkflowDetails() {{
                                    onPartialUpload = new org.openapis.openapi.models.shared.WorkflowDetail[]{{
                                        add(new WorkflowDetail("quos", "perferendis") {{
                                            executionRole = "aliquid";
                                            workflowId = "cupiditate";
                                        }}),
                                    }};
                                    onUpload = new org.openapis.openapi.models.shared.WorkflowDetail[]{{
                                        add(new WorkflowDetail("alias", "fugit") {{
                                            executionRole = "assumenda";
                                            workflowId = "ipsam";
                                        }}),
                                    }};
                                }};;
                            }};, CreateServerXAmzTargetEnum.TRANSFER_SERVICE_CREATE_SERVER) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "tempora";
                xAmzDate = "facilis";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "delectus";
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

## createUser

Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUserRequest;
import org.openapis.openapi.models.operations.CreateUserResponse;
import org.openapis.openapi.models.operations.CreateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateUserRequest;
import org.openapis.openapi.models.shared.HomeDirectoryMapEntry;
import org.openapis.openapi.models.shared.HomeDirectoryTypeEnum;
import org.openapis.openapi.models.shared.PosixProfile;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUserRequest req = new CreateUserRequest(                new CreateUserRequest("non", "eligendi", "sint") {{
                                homeDirectory = "aliquid";
                                homeDirectoryMappings = new org.openapis.openapi.models.shared.HomeDirectoryMapEntry[]{{
                                    add(new HomeDirectoryMapEntry("officia", "dolor") {{
                                        entry = "necessitatibus";
                                        target = "sint";
                                    }}),
                                    add(new HomeDirectoryMapEntry("dolorum", "in") {{
                                        entry = "debitis";
                                        target = "a";
                                    }}),
                                    add(new HomeDirectoryMapEntry("maiores", "rerum") {{
                                        entry = "in";
                                        target = "illum";
                                    }}),
                                }};
                                homeDirectoryType = HomeDirectoryTypeEnum.PATH;
                                policy = "magnam";
                                posixProfile = new PosixProfile(767024L, 813798L) {{
                                    secondaryGids = new Long[]{{
                                        add(396506L),
                                        add(675439L),
                                    }};
                                }};;
                                sshPublicKeyBody = "accusamus";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("accusamus", "delectus") {{
                                        key = "occaecati";
                                        value = "enim";
                                    }}),
                                }};
                            }};, CreateUserXAmzTargetEnum.TRANSFER_SERVICE_CREATE_USER) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "provident";
                xAmzCredential = "nam";
                xAmzDate = "id";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "sapiente";
            }};            

            CreateUserResponse res = sdk.sdk.createUser(req);

            if (res.createUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWorkflow

 Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWorkflowRequest;
import org.openapis.openapi.models.operations.CreateWorkflowResponse;
import org.openapis.openapi.models.operations.CreateWorkflowXAmzTargetEnum;
import org.openapis.openapi.models.shared.CopyStepDetails;
import org.openapis.openapi.models.shared.CreateWorkflowRequest;
import org.openapis.openapi.models.shared.CustomStepDetails;
import org.openapis.openapi.models.shared.DecryptStepDetails;
import org.openapis.openapi.models.shared.DeleteStepDetails;
import org.openapis.openapi.models.shared.EfsFileLocation;
import org.openapis.openapi.models.shared.EncryptionTypeEnum;
import org.openapis.openapi.models.shared.InputFileLocation;
import org.openapis.openapi.models.shared.OverwriteExistingEnum;
import org.openapis.openapi.models.shared.S3InputFileLocation;
import org.openapis.openapi.models.shared.S3Tag;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.TagStepDetails;
import org.openapis.openapi.models.shared.WorkflowStep;
import org.openapis.openapi.models.shared.WorkflowStepTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWorkflowRequest req = new CreateWorkflowRequest(                new CreateWorkflowRequest(                new org.openapis.openapi.models.shared.WorkflowStep[]{{
                                                add(new WorkflowStep() {{
                                                    copyStepDetails = new CopyStepDetails() {{
                                                        destinationFileLocation = new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "nisi";
                                                                path = "vel";
                                                            }};
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "natus";
                                                                key = "omnis";
                                                            }};
                                                        }};
                                                        name = "Dorothy Kovacek";
                                                        overwriteExisting = OverwriteExistingEnum.FALSE;
                                                        sourceFileLocation = "labore";
                                                    }};
                                                    customStepDetails = new CustomStepDetails() {{
                                                        name = "Laurie Mosciski";
                                                        sourceFileLocation = "vero";
                                                        target = "aspernatur";
                                                        timeoutSeconds = 102863L;
                                                    }};
                                                    decryptStepDetails = new DecryptStepDetails(                new InputFileLocation() {{
                                                                        efsFileLocation = new EfsFileLocation() {{
                                                                            fileSystemId = "eum";
                                                                            path = "dolor";
                                                                        }};;
                                                                        s3FileLocation = new S3InputFileLocation() {{
                                                                            bucket = "necessitatibus";
                                                                            key = "odit";
                                                                        }};;
                                                                    }};, EncryptionTypeEnum.PGP) {{
                                                        destinationFileLocation = new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "magnam";
                                                                path = "et";
                                                            }};
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "excepturi";
                                                                key = "ullam";
                                                            }};
                                                        }};
                                                        name = "Miss Julian Marvin";
                                                        overwriteExisting = OverwriteExistingEnum.FALSE;
                                                        sourceFileLocation = "ad";
                                                        type = EncryptionTypeEnum.PGP;
                                                    }};
                                                    deleteStepDetails = new DeleteStepDetails() {{
                                                        name = "Joyce Kertzmann";
                                                        sourceFileLocation = "eius";
                                                    }};
                                                    tagStepDetails = new TagStepDetails() {{
                                                        name = "Alfredo Prosacco Sr.";
                                                        sourceFileLocation = "repudiandae";
                                                        tags = new org.openapis.openapi.models.shared.S3Tag[]{{
                                                            add(new S3Tag("repellat", "quibusdam") {{
                                                                key = "expedita";
                                                                value = "nihil";
                                                            }}),
                                                            add(new S3Tag("pariatur", "accusantium") {{
                                                                key = "sed";
                                                                value = "saepe";
                                                            }}),
                                                        }};
                                                    }};
                                                    type = WorkflowStepTypeEnum.COPY;
                                                }}),
                                                add(new WorkflowStep() {{
                                                    copyStepDetails = new CopyStepDetails() {{
                                                        destinationFileLocation = new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "praesentium";
                                                                path = "natus";
                                                            }};
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "magni";
                                                                key = "sunt";
                                                            }};
                                                        }};
                                                        name = "Gilberto Streich";
                                                        overwriteExisting = OverwriteExistingEnum.FALSE;
                                                        sourceFileLocation = "odit";
                                                    }};
                                                    customStepDetails = new CustomStepDetails() {{
                                                        name = "Donna Bernhard";
                                                        sourceFileLocation = "ipsam";
                                                        target = "voluptate";
                                                        timeoutSeconds = 420075L;
                                                    }};
                                                    decryptStepDetails = new DecryptStepDetails(                new InputFileLocation() {{
                                                                        efsFileLocation = new EfsFileLocation() {{
                                                                            fileSystemId = "libero";
                                                                            path = "nobis";
                                                                        }};;
                                                                        s3FileLocation = new S3InputFileLocation() {{
                                                                            bucket = "dolores";
                                                                            key = "quis";
                                                                        }};;
                                                                    }};, EncryptionTypeEnum.PGP) {{
                                                        destinationFileLocation = new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "nam";
                                                                path = "eaque";
                                                            }};
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "pariatur";
                                                                key = "nemo";
                                                            }};
                                                        }};
                                                        name = "Joseph Steuber DDS";
                                                        overwriteExisting = OverwriteExistingEnum.TRUE;
                                                        sourceFileLocation = "hic";
                                                        type = EncryptionTypeEnum.PGP;
                                                    }};
                                                    deleteStepDetails = new DeleteStepDetails() {{
                                                        name = "Lance Becker";
                                                        sourceFileLocation = "eos";
                                                    }};
                                                    tagStepDetails = new TagStepDetails() {{
                                                        name = "Jacqueline Schimmel";
                                                        sourceFileLocation = "vero";
                                                        tags = new org.openapis.openapi.models.shared.S3Tag[]{{
                                                            add(new S3Tag("omnis", "facilis") {{
                                                                key = "hic";
                                                                value = "recusandae";
                                                            }}),
                                                            add(new S3Tag("porro", "consequuntur") {{
                                                                key = "perspiciatis";
                                                                value = "voluptatem";
                                                            }}),
                                                        }};
                                                    }};
                                                    type = WorkflowStepTypeEnum.TAG;
                                                }}),
                                                add(new WorkflowStep() {{
                                                    copyStepDetails = new CopyStepDetails() {{
                                                        destinationFileLocation = new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "error";
                                                                path = "eaque";
                                                            }};
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "occaecati";
                                                                key = "rerum";
                                                            }};
                                                        }};
                                                        name = "Ollie Watsica";
                                                        overwriteExisting = OverwriteExistingEnum.FALSE;
                                                        sourceFileLocation = "deleniti";
                                                    }};
                                                    customStepDetails = new CustomStepDetails() {{
                                                        name = "Rene Rolfson";
                                                        sourceFileLocation = "quaerat";
                                                        target = "quos";
                                                        timeoutSeconds = 398221L;
                                                    }};
                                                    decryptStepDetails = new DecryptStepDetails(                new InputFileLocation() {{
                                                                        efsFileLocation = new EfsFileLocation() {{
                                                                            fileSystemId = "amet";
                                                                            path = "dolorum";
                                                                        }};;
                                                                        s3FileLocation = new S3InputFileLocation() {{
                                                                            bucket = "numquam";
                                                                            key = "veritatis";
                                                                        }};;
                                                                    }};, EncryptionTypeEnum.PGP) {{
                                                        destinationFileLocation = new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "dolorem";
                                                                path = "dolorem";
                                                            }};
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "dolor";
                                                                key = "qui";
                                                            }};
                                                        }};
                                                        name = "Mindy Marks";
                                                        overwriteExisting = OverwriteExistingEnum.TRUE;
                                                        sourceFileLocation = "reiciendis";
                                                        type = EncryptionTypeEnum.PGP;
                                                    }};
                                                    deleteStepDetails = new DeleteStepDetails() {{
                                                        name = "Angela Kerluke";
                                                        sourceFileLocation = "accusamus";
                                                    }};
                                                    tagStepDetails = new TagStepDetails() {{
                                                        name = "Jan Hodkiewicz";
                                                        sourceFileLocation = "atque";
                                                        tags = new org.openapis.openapi.models.shared.S3Tag[]{{
                                                            add(new S3Tag("soluta", "dolorum") {{
                                                                key = "fugiat";
                                                                value = "ab";
                                                            }}),
                                                        }};
                                                    }};
                                                    type = WorkflowStepTypeEnum.TAG;
                                                }}),
                                            }}) {{
                                description = "voluptate";
                                onExceptionSteps = new org.openapis.openapi.models.shared.WorkflowStep[]{{
                                    add(new WorkflowStep() {{
                                        copyStepDetails = new CopyStepDetails() {{
                                            destinationFileLocation = new InputFileLocation() {{
                                                efsFileLocation = new EfsFileLocation() {{
                                                    fileSystemId = "deleniti";
                                                    path = "omnis";
                                                }};
                                                s3FileLocation = new S3InputFileLocation() {{
                                                    bucket = "necessitatibus";
                                                    key = "distinctio";
                                                }};
                                            }};
                                            name = "Jessie Emmerich";
                                            overwriteExisting = OverwriteExistingEnum.FALSE;
                                            sourceFileLocation = "eius";
                                        }};
                                        customStepDetails = new CustomStepDetails() {{
                                            name = "Lisa Fay";
                                            sourceFileLocation = "ad";
                                            target = "saepe";
                                            timeoutSeconds = 383464L;
                                        }};
                                        decryptStepDetails = new DecryptStepDetails(                new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "quod";
                                                                path = "officiis";
                                                            }};;
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "qui";
                                                                key = "dolorum";
                                                            }};;
                                                        }};, EncryptionTypeEnum.PGP) {{
                                            destinationFileLocation = new InputFileLocation() {{
                                                efsFileLocation = new EfsFileLocation() {{
                                                    fileSystemId = "deserunt";
                                                    path = "provident";
                                                }};
                                                s3FileLocation = new S3InputFileLocation() {{
                                                    bucket = "minima";
                                                    key = "repellendus";
                                                }};
                                            }};
                                            name = "Donnie Abbott";
                                            overwriteExisting = OverwriteExistingEnum.TRUE;
                                            sourceFileLocation = "vel";
                                            type = EncryptionTypeEnum.PGP;
                                        }};
                                        deleteStepDetails = new DeleteStepDetails() {{
                                            name = "Cory Pfeffer";
                                            sourceFileLocation = "quisquam";
                                        }};
                                        tagStepDetails = new TagStepDetails() {{
                                            name = "Marvin Renner";
                                            sourceFileLocation = "enim";
                                            tags = new org.openapis.openapi.models.shared.S3Tag[]{{
                                                add(new S3Tag("nihil", "sit") {{
                                                    key = "sapiente";
                                                    value = "totam";
                                                }}),
                                            }};
                                        }};
                                        type = WorkflowStepTypeEnum.DELETE;
                                    }}),
                                    add(new WorkflowStep() {{
                                        copyStepDetails = new CopyStepDetails() {{
                                            destinationFileLocation = new InputFileLocation() {{
                                                efsFileLocation = new EfsFileLocation() {{
                                                    fileSystemId = "neque";
                                                    path = "sed";
                                                }};
                                                s3FileLocation = new S3InputFileLocation() {{
                                                    bucket = "vel";
                                                    key = "libero";
                                                }};
                                            }};
                                            name = "Joanna Kohler";
                                            overwriteExisting = OverwriteExistingEnum.TRUE;
                                            sourceFileLocation = "cupiditate";
                                        }};
                                        customStepDetails = new CustomStepDetails() {{
                                            name = "Miss Jody Rogahn";
                                            sourceFileLocation = "incidunt";
                                            target = "aspernatur";
                                            timeoutSeconds = 174909L;
                                        }};
                                        decryptStepDetails = new DecryptStepDetails(                new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "sunt";
                                                                path = "ullam";
                                                            }};;
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "nam";
                                                                key = "hic";
                                                            }};;
                                                        }};, EncryptionTypeEnum.PGP) {{
                                            destinationFileLocation = new InputFileLocation() {{
                                                efsFileLocation = new EfsFileLocation() {{
                                                    fileSystemId = "distinctio";
                                                    path = "facilis";
                                                }};
                                                s3FileLocation = new S3InputFileLocation() {{
                                                    bucket = "aliquid";
                                                    key = "quam";
                                                }};
                                            }};
                                            name = "Marty Deckow";
                                            overwriteExisting = OverwriteExistingEnum.TRUE;
                                            sourceFileLocation = "odio";
                                            type = EncryptionTypeEnum.PGP;
                                        }};
                                        deleteStepDetails = new DeleteStepDetails() {{
                                            name = "Erma Rogahn PhD";
                                            sourceFileLocation = "ipsum";
                                        }};
                                        tagStepDetails = new TagStepDetails() {{
                                            name = "Gayle Lueilwitz";
                                            sourceFileLocation = "aperiam";
                                            tags = new org.openapis.openapi.models.shared.S3Tag[]{{
                                                add(new S3Tag("labore", "adipisci") {{
                                                    key = "dolorem";
                                                    value = "dolore";
                                                }}),
                                                add(new S3Tag("quae", "aut") {{
                                                    key = "dolorum";
                                                    value = "architecto";
                                                }}),
                                                add(new S3Tag("consequatur", "est") {{
                                                    key = "quas";
                                                    value = "itaque";
                                                }}),
                                                add(new S3Tag("doloribus", "ut") {{
                                                    key = "repellendus";
                                                    value = "porro";
                                                }}),
                                            }};
                                        }};
                                        type = WorkflowStepTypeEnum.DELETE;
                                    }}),
                                    add(new WorkflowStep() {{
                                        copyStepDetails = new CopyStepDetails() {{
                                            destinationFileLocation = new InputFileLocation() {{
                                                efsFileLocation = new EfsFileLocation() {{
                                                    fileSystemId = "cupiditate";
                                                    path = "qui";
                                                }};
                                                s3FileLocation = new S3InputFileLocation() {{
                                                    bucket = "quae";
                                                    key = "laudantium";
                                                }};
                                            }};
                                            name = "Toni Wolff";
                                            overwriteExisting = OverwriteExistingEnum.FALSE;
                                            sourceFileLocation = "quis";
                                        }};
                                        customStepDetails = new CustomStepDetails() {{
                                            name = "Dixie Klocko";
                                            sourceFileLocation = "tenetur";
                                            target = "dignissimos";
                                            timeoutSeconds = 941378L;
                                        }};
                                        decryptStepDetails = new DecryptStepDetails(                new InputFileLocation() {{
                                                            efsFileLocation = new EfsFileLocation() {{
                                                                fileSystemId = "natus";
                                                                path = "impedit";
                                                            }};;
                                                            s3FileLocation = new S3InputFileLocation() {{
                                                                bucket = "aut";
                                                                key = "voluptatibus";
                                                            }};;
                                                        }};, EncryptionTypeEnum.PGP) {{
                                            destinationFileLocation = new InputFileLocation() {{
                                                efsFileLocation = new EfsFileLocation() {{
                                                    fileSystemId = "distinctio";
                                                    path = "quod";
                                                }};
                                                s3FileLocation = new S3InputFileLocation() {{
                                                    bucket = "odio";
                                                    key = "similique";
                                                }};
                                            }};
                                            name = "Hugo Kuphal";
                                            overwriteExisting = OverwriteExistingEnum.FALSE;
                                            sourceFileLocation = "sequi";
                                            type = EncryptionTypeEnum.PGP;
                                        }};
                                        deleteStepDetails = new DeleteStepDetails() {{
                                            name = "Freda Cormier";
                                            sourceFileLocation = "doloribus";
                                        }};
                                        tagStepDetails = new TagStepDetails() {{
                                            name = "Miss Vicky Kuphal";
                                            sourceFileLocation = "ipsam";
                                            tags = new org.openapis.openapi.models.shared.S3Tag[]{{
                                                add(new S3Tag("possimus", "magnam") {{
                                                    key = "aspernatur";
                                                    value = "vel";
                                                }}),
                                                add(new S3Tag("laudantium", "dicta") {{
                                                    key = "ratione";
                                                    value = "ex";
                                                }}),
                                            }};
                                        }};
                                        type = WorkflowStepTypeEnum.CUSTOM;
                                    }}),
                                }};
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("nulla", "excepturi") {{
                                        key = "quasi";
                                        value = "ex";
                                    }}),
                                    add(new Tag("sapiente", "quisquam") {{
                                        key = "voluptatibus";
                                        value = "nostrum";
                                    }}),
                                    add(new Tag("impedit", "corporis") {{
                                        key = "saepe";
                                        value = "ea";
                                    }}),
                                    add(new Tag("inventore", "magnam") {{
                                        key = "veniam";
                                        value = "aliquid";
                                    }}),
                                }};
                            }};, CreateWorkflowXAmzTargetEnum.TRANSFER_SERVICE_CREATE_WORKFLOW) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "quo";
                xAmzCredential = "consectetur";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "eaque";
            }};            

            CreateWorkflowResponse res = sdk.sdk.createWorkflow(req);

            if (res.createWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAccess

Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAccessRequest;
import org.openapis.openapi.models.operations.DeleteAccessResponse;
import org.openapis.openapi.models.operations.DeleteAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAccessRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAccessRequest req = new DeleteAccessRequest(                new DeleteAccessRequest("libero", "aut");, DeleteAccessXAmzTargetEnum.TRANSFER_SERVICE_DELETE_ACCESS) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "impedit";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "inventore";
            }};            

            DeleteAccessResponse res = sdk.sdk.deleteAccess(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteAgreement

Delete the agreement that's specified in the provided <code>AgreementId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAgreementRequest;
import org.openapis.openapi.models.operations.DeleteAgreementResponse;
import org.openapis.openapi.models.operations.DeleteAgreementXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteAgreementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAgreementRequest req = new DeleteAgreementRequest(                new DeleteAgreementRequest("et", "dolorum");, DeleteAgreementXAmzTargetEnum.TRANSFER_SERVICE_DELETE_AGREEMENT) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "velit";
                xAmzDate = "eum";
                xAmzSecurityToken = "autem";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "quas";
            }};            

            DeleteAgreementResponse res = sdk.sdk.deleteAgreement(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteCertificate

Deletes the certificate that's specified in the <code>CertificateId</code> parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteCertificateRequest;
import org.openapis.openapi.models.operations.DeleteCertificateResponse;
import org.openapis.openapi.models.operations.DeleteCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("assumenda") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteCertificateRequest req = new DeleteCertificateRequest(                new DeleteCertificateRequest("nulla");, DeleteCertificateXAmzTargetEnum.TRANSFER_SERVICE_DELETE_CERTIFICATE) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "libero";
                xAmzCredential = "quasi";
                xAmzDate = "tempora";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "explicabo";
                xAmzSignedHeaders = "provident";
            }};            

            DeleteCertificateResponse res = sdk.sdk.deleteCertificate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteConnector

Deletes the agreement that's specified in the provided <code>ConnectorId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConnectorRequest;
import org.openapis.openapi.models.operations.DeleteConnectorResponse;
import org.openapis.openapi.models.operations.DeleteConnectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteConnectorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteConnectorRequest req = new DeleteConnectorRequest(                new DeleteConnectorRequest("molestiae");, DeleteConnectorXAmzTargetEnum.TRANSFER_SERVICE_DELETE_CONNECTOR) {{
                xAmzAlgorithm = "magnam";
                xAmzContentSha256 = "odio";
                xAmzCredential = "eius";
                xAmzDate = "esse";
                xAmzSecurityToken = "esse";
                xAmzSignature = "rem";
                xAmzSignedHeaders = "fuga";
            }};            

            DeleteConnectorResponse res = sdk.sdk.deleteConnector(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteHostKey

Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteHostKeyRequest;
import org.openapis.openapi.models.operations.DeleteHostKeyResponse;
import org.openapis.openapi.models.operations.DeleteHostKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteHostKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteHostKeyRequest req = new DeleteHostKeyRequest(                new DeleteHostKeyRequest("quidem", "fugiat");, DeleteHostKeyXAmzTargetEnum.TRANSFER_SERVICE_DELETE_HOST_KEY) {{
                xAmzAlgorithm = "ut";
                xAmzContentSha256 = "eum";
                xAmzCredential = "suscipit";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "eos";
                xAmzSignature = "praesentium";
                xAmzSignedHeaders = "quisquam";
            }};            

            DeleteHostKeyResponse res = sdk.sdk.deleteHostKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProfile

Deletes the profile that's specified in the <code>ProfileId</code> parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProfileRequest;
import org.openapis.openapi.models.operations.DeleteProfileResponse;
import org.openapis.openapi.models.operations.DeleteProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProfileRequest req = new DeleteProfileRequest(                new DeleteProfileRequest("ipsa");, DeleteProfileXAmzTargetEnum.TRANSFER_SERVICE_DELETE_PROFILE) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "quidem";
                xAmzCredential = "neque";
                xAmzDate = "quo";
                xAmzSecurityToken = "illum";
                xAmzSignature = "quo";
                xAmzSignedHeaders = "fuga";
            }};            

            DeleteProfileResponse res = sdk.sdk.deleteProfile(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteServer

<p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>

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
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteServerRequest req = new DeleteServerRequest(                new DeleteServerRequest("eos");, DeleteServerXAmzTargetEnum.TRANSFER_SERVICE_DELETE_SERVER) {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "ab";
                xAmzCredential = "cupiditate";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "ipsam";
            }};            

            DeleteServerResponse res = sdk.sdk.deleteServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSshPublicKey

Deletes a user's Secure Shell (SSH) public key.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSshPublicKeyRequest;
import org.openapis.openapi.models.operations.DeleteSshPublicKeyResponse;
import org.openapis.openapi.models.operations.DeleteSshPublicKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSshPublicKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSshPublicKeyRequest req = new DeleteSshPublicKeyRequest(                new DeleteSshPublicKeyRequest("sequi", "quo", "esse");, DeleteSshPublicKeyXAmzTargetEnum.TRANSFER_SERVICE_DELETE_SSH_PUBLIC_KEY) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "aperiam";
                xAmzCredential = "distinctio";
                xAmzDate = "quod";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "nihil";
            }};            

            DeleteSshPublicKeyResponse res = sdk.sdk.deleteSshPublicKey(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteUser

<p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteUserRequest;
import org.openapis.openapi.models.operations.DeleteUserResponse;
import org.openapis.openapi.models.operations.DeleteUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteUserRequest req = new DeleteUserRequest(                new DeleteUserRequest("accusamus", "aliquam");, DeleteUserXAmzTargetEnum.TRANSFER_SERVICE_DELETE_USER) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "occaecati";
                xAmzCredential = "commodi";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "molestiae";
            }};            

            DeleteUserResponse res = sdk.sdk.deleteUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWorkflow

Deletes the specified workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWorkflowRequest;
import org.openapis.openapi.models.operations.DeleteWorkflowResponse;
import org.openapis.openapi.models.operations.DeleteWorkflowXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWorkflowRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWorkflowRequest req = new DeleteWorkflowRequest(                new DeleteWorkflowRequest("porro");, DeleteWorkflowXAmzTargetEnum.TRANSFER_SERVICE_DELETE_WORKFLOW) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "quas";
                xAmzCredential = "praesentium";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "fuga";
            }};            

            DeleteWorkflowResponse res = sdk.sdk.deleteWorkflow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAccess

<p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAccessRequest;
import org.openapis.openapi.models.operations.DescribeAccessResponse;
import org.openapis.openapi.models.operations.DescribeAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAccessRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAccessRequest req = new DescribeAccessRequest(                new DescribeAccessRequest("incidunt", "atque");, DescribeAccessXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_ACCESS) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "minima";
                xAmzCredential = "nisi";
                xAmzDate = "fugit";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "ratione";
            }};            

            DescribeAccessResponse res = sdk.sdk.describeAccess(req);

            if (res.describeAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeAgreement

Describes the agreement that's identified by the <code>AgreementId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeAgreementRequest;
import org.openapis.openapi.models.operations.DescribeAgreementResponse;
import org.openapis.openapi.models.operations.DescribeAgreementXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeAgreementRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeAgreementRequest req = new DescribeAgreementRequest(                new DescribeAgreementRequest("saepe", "occaecati");, DescribeAgreementXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_AGREEMENT) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "et";
                xAmzCredential = "esse";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "esse";
            }};            

            DescribeAgreementResponse res = sdk.sdk.describeAgreement(req);

            if (res.describeAgreementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCertificate

Describes the certificate that's identified by the <code>CertificateId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCertificateRequest;
import org.openapis.openapi.models.operations.DescribeCertificateResponse;
import org.openapis.openapi.models.operations.DescribeCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCertificateRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCertificateRequest req = new DescribeCertificateRequest(                new DescribeCertificateRequest("nam");, DescribeCertificateXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_CERTIFICATE) {{
                xAmzAlgorithm = "vero";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "quasi";
                xAmzDate = "saepe";
                xAmzSecurityToken = "vel";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "molestiae";
            }};            

            DescribeCertificateResponse res = sdk.sdk.describeCertificate(req);

            if (res.describeCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeConnector

Describes the connector that's identified by the <code>ConnectorId.</code> 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeConnectorRequest;
import org.openapis.openapi.models.operations.DescribeConnectorResponse;
import org.openapis.openapi.models.operations.DescribeConnectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeConnectorRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rerum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeConnectorRequest req = new DescribeConnectorRequest(                new DescribeConnectorRequest("occaecati");, DescribeConnectorXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_CONNECTOR) {{
                xAmzAlgorithm = "minima";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "eligendi";
                xAmzDate = "sit";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "tempore";
                xAmzSignedHeaders = "adipisci";
            }};            

            DescribeConnectorResponse res = sdk.sdk.describeConnector(req);

            if (res.describeConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeExecution

You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeExecutionRequest;
import org.openapis.openapi.models.operations.DescribeExecutionResponse;
import org.openapis.openapi.models.operations.DescribeExecutionXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeExecutionRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cumque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeExecutionRequest req = new DescribeExecutionRequest(                new DescribeExecutionRequest("consequuntur", "consequatur");, DescribeExecutionXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_EXECUTION) {{
                xAmzAlgorithm = "minus";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "sapiente";
                xAmzDate = "consectetur";
                xAmzSecurityToken = "esse";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "provident";
            }};            

            DescribeExecutionResponse res = sdk.sdk.describeExecution(req);

            if (res.describeExecutionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeHostKey

Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeHostKeyRequest;
import org.openapis.openapi.models.operations.DescribeHostKeyResponse;
import org.openapis.openapi.models.operations.DescribeHostKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeHostKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeHostKeyRequest req = new DescribeHostKeyRequest(                new DescribeHostKeyRequest("nulla", "quas");, DescribeHostKeyXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_HOST_KEY) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "a";
                xAmzDate = "error";
                xAmzSecurityToken = "sint";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "possimus";
            }};            

            DescribeHostKeyResponse res = sdk.sdk.describeHostKey(req);

            if (res.describeHostKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeProfile

Returns the details of the profile that's specified by the <code>ProfileId</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeProfileRequest;
import org.openapis.openapi.models.operations.DescribeProfileResponse;
import org.openapis.openapi.models.operations.DescribeProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeProfileRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeProfileRequest req = new DescribeProfileRequest(                new DescribeProfileRequest("eveniet");, DescribeProfileXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_PROFILE) {{
                xAmzAlgorithm = "asperiores";
                xAmzContentSha256 = "facere";
                xAmzCredential = "veritatis";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "quasi";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "culpa";
            }};            

            DescribeProfileResponse res = sdk.sdk.describeProfile(req);

            if (res.describeProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeSecurityPolicy

Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeSecurityPolicyRequest;
import org.openapis.openapi.models.operations.DescribeSecurityPolicyResponse;
import org.openapis.openapi.models.operations.DescribeSecurityPolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeSecurityPolicyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeSecurityPolicyRequest req = new DescribeSecurityPolicyRequest(                new DescribeSecurityPolicyRequest("tenetur");, DescribeSecurityPolicyXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_SECURITY_POLICY) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "earum";
                xAmzCredential = "vel";
                xAmzDate = "in";
                xAmzSecurityToken = "eius";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "illum";
            }};            

            DescribeSecurityPolicyResponse res = sdk.sdk.describeSecurityPolicy(req);

            if (res.describeSecurityPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeServer

<p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeServerRequest;
import org.openapis.openapi.models.operations.DescribeServerResponse;
import org.openapis.openapi.models.operations.DescribeServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeServerRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeServerRequest req = new DescribeServerRequest(                new DescribeServerRequest("accusantium");, DescribeServerXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_SERVER) {{
                xAmzAlgorithm = "aliquam";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "dicta";
                xAmzDate = "ullam";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "nisi";
            }};            

            DescribeServerResponse res = sdk.sdk.describeServer(req);

            if (res.describeServerResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeUser

<p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeUserRequest;
import org.openapis.openapi.models.operations.DescribeUserResponse;
import org.openapis.openapi.models.operations.DescribeUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeUserRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeUserRequest req = new DescribeUserRequest(                new DescribeUserRequest("voluptatum", "qui");, DescribeUserXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_USER) {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "ex";
                xAmzCredential = "deleniti";
                xAmzDate = "itaque";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "omnis";
            }};            

            DescribeUserResponse res = sdk.sdk.describeUser(req);

            if (res.describeUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeWorkflow

Describes the specified workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeWorkflowRequest;
import org.openapis.openapi.models.operations.DescribeWorkflowResponse;
import org.openapis.openapi.models.operations.DescribeWorkflowXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeWorkflowRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeWorkflowRequest req = new DescribeWorkflowRequest(                new DescribeWorkflowRequest("quasi");, DescribeWorkflowXAmzTargetEnum.TRANSFER_SERVICE_DESCRIBE_WORKFLOW) {{
                xAmzAlgorithm = "at";
                xAmzContentSha256 = "et";
                xAmzCredential = "voluptate";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "minima";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "consectetur";
            }};            

            DescribeWorkflowResponse res = sdk.sdk.describeWorkflow(req);

            if (res.describeWorkflowResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importCertificate

Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportCertificateRequest;
import org.openapis.openapi.models.operations.ImportCertificateResponse;
import org.openapis.openapi.models.operations.ImportCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CertificateUsageTypeEnum;
import org.openapis.openapi.models.shared.ImportCertificateRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportCertificateRequest req = new ImportCertificateRequest(                new ImportCertificateRequest("iste", CertificateUsageTypeEnum.ENCRYPTION) {{
                                activeDate = OffsetDateTime.parse("2022-06-24T08:02:02.406Z");
                                certificateChain = "aut";
                                description = "laudantium";
                                inactiveDate = OffsetDateTime.parse("2022-05-08T19:28:18.512Z");
                                privateKey = "ab";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("dolor", "occaecati") {{
                                        key = "non";
                                        value = "voluptatem";
                                    }}),
                                    add(new Tag("explicabo", "voluptas") {{
                                        key = "numquam";
                                        value = "impedit";
                                    }}),
                                    add(new Tag("dicta", "maiores") {{
                                        key = "aut";
                                        value = "dignissimos";
                                    }}),
                                }};
                            }};, ImportCertificateXAmzTargetEnum.TRANSFER_SERVICE_IMPORT_CERTIFICATE) {{
                xAmzAlgorithm = "natus";
                xAmzContentSha256 = "velit";
                xAmzCredential = "voluptatibus";
                xAmzDate = "voluptas";
                xAmzSecurityToken = "asperiores";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "ea";
            }};            

            ImportCertificateResponse res = sdk.sdk.importCertificate(req);

            if (res.importCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importHostKey

Adds a host key to the server that's specified by the <code>ServerId</code> parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportHostKeyRequest;
import org.openapis.openapi.models.operations.ImportHostKeyResponse;
import org.openapis.openapi.models.operations.ImportHostKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportHostKeyRequest;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportHostKeyRequest req = new ImportHostKeyRequest(                new ImportHostKeyRequest("consequuntur", "repellendus") {{
                                description = "officia";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag("asperiores", "nemo") {{
                                        key = "dignissimos";
                                        value = "officia";
                                    }}),
                                    add(new Tag("porro", "quod") {{
                                        key = "quae";
                                        value = "quaerat";
                                    }}),
                                    add(new Tag("adipisci", "fuga") {{
                                        key = "labore";
                                        value = "ab";
                                    }}),
                                    add(new Tag("velit", "culpa") {{
                                        key = "id";
                                        value = "suscipit";
                                    }}),
                                }};
                            }};, ImportHostKeyXAmzTargetEnum.TRANSFER_SERVICE_IMPORT_HOST_KEY) {{
                xAmzAlgorithm = "est";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "totam";
                xAmzDate = "fugiat";
                xAmzSecurityToken = "vel";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "quos";
            }};            

            ImportHostKeyResponse res = sdk.sdk.importHostKey(req);

            if (res.importHostKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importSshPublicKey

<p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportSshPublicKeyRequest;
import org.openapis.openapi.models.operations.ImportSshPublicKeyResponse;
import org.openapis.openapi.models.operations.ImportSshPublicKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.ImportSshPublicKeyRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportSshPublicKeyRequest req = new ImportSshPublicKeyRequest(                new ImportSshPublicKeyRequest("labore", "possimus", "facilis");, ImportSshPublicKeyXAmzTargetEnum.TRANSFER_SERVICE_IMPORT_SSH_PUBLIC_KEY) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "in";
                xAmzDate = "corporis";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "nemo";
            }};            

            ImportSshPublicKeyResponse res = sdk.sdk.importSshPublicKey(req);

            if (res.importSshPublicKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAccesses

Lists the details for all the accesses you have on your server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAccessesRequest;
import org.openapis.openapi.models.operations.ListAccessesResponse;
import org.openapis.openapi.models.operations.ListAccessesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAccessesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccessesRequest req = new ListAccessesRequest(                new ListAccessesRequest("aliquid") {{
                                maxResults = 46007L;
                                nextToken = "cum";
                            }};, ListAccessesXAmzTargetEnum.TRANSFER_SERVICE_LIST_ACCESSES) {{
                maxResults = "consectetur";
                nextToken = "in";
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "earum";
                xAmzCredential = "facere";
                xAmzDate = "numquam";
                xAmzSecurityToken = "doloribus";
                xAmzSignature = "suscipit";
                xAmzSignedHeaders = "reiciendis";
            }};            

            ListAccessesResponse res = sdk.sdk.listAccesses(req);

            if (res.listAccessesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAgreements

Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAgreementsRequest;
import org.openapis.openapi.models.operations.ListAgreementsResponse;
import org.openapis.openapi.models.operations.ListAgreementsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListAgreementsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAgreementsRequest req = new ListAgreementsRequest(                new ListAgreementsRequest("saepe") {{
                                maxResults = 897071L;
                                nextToken = "dolore";
                            }};, ListAgreementsXAmzTargetEnum.TRANSFER_SERVICE_LIST_AGREEMENTS) {{
                maxResults = "sunt";
                nextToken = "asperiores";
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "non";
                xAmzCredential = "amet";
                xAmzDate = "beatae";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "a";
                xAmzSignedHeaders = "debitis";
            }};            

            ListAgreementsResponse res = sdk.sdk.listAgreements(req);

            if (res.listAgreementsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCertificates

Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCertificatesRequest;
import org.openapis.openapi.models.operations.ListCertificatesResponse;
import org.openapis.openapi.models.operations.ListCertificatesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListCertificatesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCertificatesRequest req = new ListCertificatesRequest(                new ListCertificatesRequest() {{
                                maxResults = 358107L;
                                nextToken = "harum";
                            }};, ListCertificatesXAmzTargetEnum.TRANSFER_SERVICE_LIST_CERTIFICATES) {{
                maxResults = "laboriosam";
                nextToken = "ipsa";
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "libero";
                xAmzCredential = "vitae";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "similique";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "aspernatur";
            }};            

            ListCertificatesResponse res = sdk.sdk.listCertificates(req);

            if (res.listCertificatesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnectors

Lists the connectors for the specified Region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectorsRequest;
import org.openapis.openapi.models.operations.ListConnectorsResponse;
import org.openapis.openapi.models.operations.ListConnectorsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListConnectorsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectorsRequest req = new ListConnectorsRequest(                new ListConnectorsRequest() {{
                                maxResults = 374244L;
                                nextToken = "voluptas";
                            }};, ListConnectorsXAmzTargetEnum.TRANSFER_SERVICE_LIST_CONNECTORS) {{
                maxResults = "minima";
                nextToken = "nobis";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "adipisci";
                xAmzCredential = "minus";
                xAmzDate = "dolores";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "in";
                xAmzSignedHeaders = "dolore";
            }};            

            ListConnectorsResponse res = sdk.sdk.listConnectors(req);

            if (res.listConnectorsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listExecutions

Lists all executions for the specified workflow.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListExecutionsRequest;
import org.openapis.openapi.models.operations.ListExecutionsResponse;
import org.openapis.openapi.models.operations.ListExecutionsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListExecutionsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListExecutionsRequest req = new ListExecutionsRequest(                new ListExecutionsRequest("officiis") {{
                                maxResults = 839189L;
                                nextToken = "ullam";
                            }};, ListExecutionsXAmzTargetEnum.TRANSFER_SERVICE_LIST_EXECUTIONS) {{
                maxResults = "adipisci";
                nextToken = "cum";
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "hic";
                xAmzDate = "nesciunt";
                xAmzSecurityToken = "culpa";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "pariatur";
            }};            

            ListExecutionsResponse res = sdk.sdk.listExecutions(req);

            if (res.listExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listHostKeys

Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListHostKeysRequest;
import org.openapis.openapi.models.operations.ListHostKeysResponse;
import org.openapis.openapi.models.operations.ListHostKeysXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListHostKeysRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListHostKeysRequest req = new ListHostKeysRequest(                new ListHostKeysRequest("hic") {{
                                maxResults = 348783L;
                                nextToken = "nobis";
                            }};, ListHostKeysXAmzTargetEnum.TRANSFER_SERVICE_LIST_HOST_KEYS) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "sed";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "facilis";
            }};            

            ListHostKeysResponse res = sdk.sdk.listHostKeys(req);

            if (res.listHostKeysResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProfiles

Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProfilesRequest;
import org.openapis.openapi.models.operations.ListProfilesResponse;
import org.openapis.openapi.models.operations.ListProfilesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProfilesRequest;
import org.openapis.openapi.models.shared.ProfileTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProfilesRequest req = new ListProfilesRequest(                new ListProfilesRequest() {{
                                maxResults = 709072L;
                                nextToken = "ab";
                                profileType = ProfileTypeEnum.PARTNER;
                            }};, ListProfilesXAmzTargetEnum.TRANSFER_SERVICE_LIST_PROFILES) {{
                maxResults = "dolore";
                nextToken = "laborum";
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "in";
                xAmzCredential = "commodi";
                xAmzDate = "quidem";
                xAmzSecurityToken = "explicabo";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "unde";
            }};            

            ListProfilesResponse res = sdk.sdk.listProfiles(req);

            if (res.listProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSecurityPolicies

Lists the security policies that are attached to your file transfer protocol-enabled servers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSecurityPoliciesRequest;
import org.openapis.openapi.models.operations.ListSecurityPoliciesResponse;
import org.openapis.openapi.models.operations.ListSecurityPoliciesXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSecurityPoliciesRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSecurityPoliciesRequest req = new ListSecurityPoliciesRequest(                new ListSecurityPoliciesRequest() {{
                                maxResults = 382808L;
                                nextToken = "sapiente";
                            }};, ListSecurityPoliciesXAmzTargetEnum.TRANSFER_SERVICE_LIST_SECURITY_POLICIES) {{
                maxResults = "debitis";
                nextToken = "illo";
                xAmzAlgorithm = "reiciendis";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "corrupti";
                xAmzDate = "maiores";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "provident";
            }};            

            ListSecurityPoliciesResponse res = sdk.sdk.listSecurityPolicies(req);

            if (res.listSecurityPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listServers

Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListServersRequest;
import org.openapis.openapi.models.operations.ListServersResponse;
import org.openapis.openapi.models.operations.ListServersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListServersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListServersRequest req = new ListServersRequest(                new ListServersRequest() {{
                                maxResults = 896762L;
                                nextToken = "ipsum";
                            }};, ListServersXAmzTargetEnum.TRANSFER_SERVICE_LIST_SERVERS) {{
                maxResults = "ea";
                nextToken = "occaecati";
                xAmzAlgorithm = "quos";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "tempora";
                xAmzDate = "tempora";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "ex";
            }};            

            ListServersResponse res = sdk.sdk.listServers(req);

            if (res.listServersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.

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
                .setSecurity(new Security("sit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequest("non") {{
                                maxResults = 888044L;
                                nextToken = "praesentium";
                            }};, ListTagsForResourceXAmzTargetEnum.TRANSFER_SERVICE_LIST_TAGS_FOR_RESOURCE) {{
                maxResults = "facilis";
                nextToken = "quaerat";
                xAmzAlgorithm = "incidunt";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "debitis";
                xAmzDate = "rem";
                xAmzSecurityToken = "sit";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "error";
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

## listUsers

Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsersRequest;
import org.openapis.openapi.models.operations.ListUsersResponse;
import org.openapis.openapi.models.operations.ListUsersXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListUsersRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veniam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListUsersRequest req = new ListUsersRequest(                new ListUsersRequest("minima") {{
                                maxResults = 924159L;
                                nextToken = "reiciendis";
                            }};, ListUsersXAmzTargetEnum.TRANSFER_SERVICE_LIST_USERS) {{
                maxResults = "nulla";
                nextToken = "magni";
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "numquam";
                xAmzDate = "veniam";
                xAmzSecurityToken = "in";
                xAmzSignature = "officiis";
                xAmzSignedHeaders = "beatae";
            }};            

            ListUsersResponse res = sdk.sdk.listUsers(req);

            if (res.listUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWorkflows

Lists all of your workflows.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWorkflowsRequest;
import org.openapis.openapi.models.operations.ListWorkflowsResponse;
import org.openapis.openapi.models.operations.ListWorkflowsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListWorkflowsRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWorkflowsRequest req = new ListWorkflowsRequest(                new ListWorkflowsRequest() {{
                                maxResults = 348476L;
                                nextToken = "praesentium";
                            }};, ListWorkflowsXAmzTargetEnum.TRANSFER_SERVICE_LIST_WORKFLOWS) {{
                maxResults = "cum";
                nextToken = "laboriosam";
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "error";
                xAmzDate = "hic";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "neque";
            }};            

            ListWorkflowsResponse res = sdk.sdk.listWorkflows(req);

            if (res.listWorkflowsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendWorkflowStepState

<p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendWorkflowStepStateRequest;
import org.openapis.openapi.models.operations.SendWorkflowStepStateResponse;
import org.openapis.openapi.models.operations.SendWorkflowStepStateXAmzTargetEnum;
import org.openapis.openapi.models.shared.CustomStepStatusEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SendWorkflowStepStateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendWorkflowStepStateRequest req = new SendWorkflowStepStateRequest(                new SendWorkflowStepStateRequest("nostrum", CustomStepStatusEnum.FAILURE, "dolorum", "corrupti");, SendWorkflowStepStateXAmzTargetEnum.TRANSFER_SERVICE_SEND_WORKFLOW_STEP_STATE) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "atque";
                xAmzDate = "fugit";
                xAmzSecurityToken = "ut";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "voluptatem";
            }};            

            SendWorkflowStepStateResponse res = sdk.sdk.sendWorkflowStepState(req);

            if (res.sendWorkflowStepStateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startFileTransfer

Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartFileTransferRequest;
import org.openapis.openapi.models.operations.StartFileTransferResponse;
import org.openapis.openapi.models.operations.StartFileTransferXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartFileTransferRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartFileTransferRequest req = new StartFileTransferRequest(                new StartFileTransferRequest("expedita",                 new String[]{{
                                                add("consequatur"),
                                                add("esse"),
                                            }});, StartFileTransferXAmzTargetEnum.TRANSFER_SERVICE_START_FILE_TRANSFER) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "sit";
                xAmzCredential = "voluptatum";
                xAmzDate = "quas";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "et";
            }};            

            StartFileTransferResponse res = sdk.sdk.startFileTransfer(req);

            if (res.startFileTransferResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startServer

<p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartServerRequest;
import org.openapis.openapi.models.operations.StartServerResponse;
import org.openapis.openapi.models.operations.StartServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StartServerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartServerRequest req = new StartServerRequest(                new StartServerRequest("ex");, StartServerXAmzTargetEnum.TRANSFER_SERVICE_START_SERVER) {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "sit";
                xAmzCredential = "vel";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "error";
                xAmzSignedHeaders = "consequatur";
            }};            

            StartServerResponse res = sdk.sdk.startServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopServer

<p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopServerRequest;
import org.openapis.openapi.models.operations.StopServerResponse;
import org.openapis.openapi.models.operations.StopServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopServerRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopServerRequest req = new StopServerRequest(                new StopServerRequest("reiciendis");, StopServerXAmzTargetEnum.TRANSFER_SERVICE_STOP_SERVER) {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "harum";
                xAmzCredential = "dicta";
                xAmzDate = "architecto";
                xAmzSecurityToken = "occaecati";
                xAmzSignature = "labore";
                xAmzSignedHeaders = "quidem";
            }};            

            StopServerResponse res = sdk.sdk.stopServer(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

<p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>

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
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequest("laborum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag("alias", "amet") {{
                                                    key = "tenetur";
                                                    value = "laboriosam";
                                                }}),
                                                add(new Tag("unde", "reiciendis") {{
                                                    key = "deserunt";
                                                    value = "voluptate";
                                                }}),
                                                add(new Tag("delectus", "voluptates") {{
                                                    key = "provident";
                                                    value = "repellendus";
                                                }}),
                                            }});, TagResourceXAmzTargetEnum.TRANSFER_SERVICE_TAG_RESOURCE) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "est";
                xAmzCredential = "quidem";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "facere";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "praesentium";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## testIdentityProvider

<p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TestIdentityProviderRequest;
import org.openapis.openapi.models.operations.TestIdentityProviderResponse;
import org.openapis.openapi.models.operations.TestIdentityProviderXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestIdentityProviderRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TestIdentityProviderRequest req = new TestIdentityProviderRequest(                new TestIdentityProviderRequest("veniam", "voluptatem") {{
                                serverProtocol = ProtocolEnum.AS2;
                                sourceIp = "repudiandae";
                                userPassword = "quasi";
                            }};, TestIdentityProviderXAmzTargetEnum.TRANSFER_SERVICE_TEST_IDENTITY_PROVIDER) {{
                xAmzAlgorithm = "atque";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "asperiores";
                xAmzDate = "totam";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "maxime";
            }};            

            TestIdentityProviderResponse res = sdk.sdk.testIdentityProvider(req);

            if (res.testIdentityProviderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

<p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>

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
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequest("esse",                 new String[]{{
                                                add("assumenda"),
                                            }});, UntagResourceXAmzTargetEnum.TRANSFER_SERVICE_UNTAG_RESOURCE) {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "atque";
                xAmzCredential = "error";
                xAmzDate = "officiis";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "natus";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAccess

Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAccessRequest;
import org.openapis.openapi.models.operations.UpdateAccessResponse;
import org.openapis.openapi.models.operations.UpdateAccessXAmzTargetEnum;
import org.openapis.openapi.models.shared.HomeDirectoryMapEntry;
import org.openapis.openapi.models.shared.HomeDirectoryTypeEnum;
import org.openapis.openapi.models.shared.PosixProfile;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAccessRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAccessRequest req = new UpdateAccessRequest(                new UpdateAccessRequest("aspernatur", "ex") {{
                                homeDirectory = "maiores";
                                homeDirectoryMappings = new org.openapis.openapi.models.shared.HomeDirectoryMapEntry[]{{
                                    add(new HomeDirectoryMapEntry("blanditiis", "suscipit") {{
                                        entry = "at";
                                        target = "error";
                                    }}),
                                    add(new HomeDirectoryMapEntry("atque", "sunt") {{
                                        entry = "repudiandae";
                                        target = "atque";
                                    }}),
                                    add(new HomeDirectoryMapEntry("repellendus", "labore") {{
                                        entry = "recusandae";
                                        target = "dolorum";
                                    }}),
                                }};
                                homeDirectoryType = HomeDirectoryTypeEnum.LOGICAL;
                                policy = "doloremque";
                                posixProfile = new PosixProfile(919783L, 116098L) {{
                                    secondaryGids = new Long[]{{
                                        add(106429L),
                                    }};
                                }};;
                                role = "dolores";
                            }};, UpdateAccessXAmzTargetEnum.TRANSFER_SERVICE_UPDATE_ACCESS) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "velit";
                xAmzDate = "a";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateAccessResponse res = sdk.sdk.updateAccess(req);

            if (res.updateAccessResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateAgreement

Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAgreementRequest;
import org.openapis.openapi.models.operations.UpdateAgreementResponse;
import org.openapis.openapi.models.operations.UpdateAgreementXAmzTargetEnum;
import org.openapis.openapi.models.shared.AgreementStatusTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateAgreementRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAgreementRequest req = new UpdateAgreementRequest(                new UpdateAgreementRequest("occaecati", "officiis") {{
                                accessRole = "perspiciatis";
                                baseDirectory = "in";
                                description = "adipisci";
                                localProfileId = "eveniet";
                                partnerProfileId = "occaecati";
                                status = AgreementStatusTypeEnum.ACTIVE;
                            }};, UpdateAgreementXAmzTargetEnum.TRANSFER_SERVICE_UPDATE_AGREEMENT) {{
                xAmzAlgorithm = "fugit";
                xAmzContentSha256 = "id";
                xAmzCredential = "quis";
                xAmzDate = "reprehenderit";
                xAmzSecurityToken = "error";
                xAmzSignature = "illo";
                xAmzSignedHeaders = "corporis";
            }};            

            UpdateAgreementResponse res = sdk.sdk.updateAgreement(req);

            if (res.updateAgreementResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCertificate

Updates the active and inactive dates for a certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCertificateRequest;
import org.openapis.openapi.models.operations.UpdateCertificateResponse;
import org.openapis.openapi.models.operations.UpdateCertificateXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateCertificateRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCertificateRequest req = new UpdateCertificateRequest(                new UpdateCertificateRequest("eveniet") {{
                                activeDate = OffsetDateTime.parse("2022-02-14T08:24:16.303Z");
                                description = "doloremque";
                                inactiveDate = OffsetDateTime.parse("2022-12-10T02:53:15.660Z");
                            }};, UpdateCertificateXAmzTargetEnum.TRANSFER_SERVICE_UPDATE_CERTIFICATE) {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "quae";
                xAmzCredential = "molestiae";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "qui";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "iure";
            }};            

            UpdateCertificateResponse res = sdk.sdk.updateCertificate(req);

            if (res.updateCertificateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnector

Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectorRequest;
import org.openapis.openapi.models.operations.UpdateConnectorResponse;
import org.openapis.openapi.models.operations.UpdateConnectorXAmzTargetEnum;
import org.openapis.openapi.models.shared.As2ConnectorConfig;
import org.openapis.openapi.models.shared.CompressionEnumEnum;
import org.openapis.openapi.models.shared.EncryptionAlgEnum;
import org.openapis.openapi.models.shared.MdnResponseEnum;
import org.openapis.openapi.models.shared.MdnSigningAlgEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SigningAlgEnum;
import org.openapis.openapi.models.shared.UpdateConnectorRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectorRequest req = new UpdateConnectorRequest(                new UpdateConnectorRequest("ratione") {{
                                accessRole = "laborum";
                                as2Config = new As2ConnectorConfig() {{
                                    compression = CompressionEnumEnum.DISABLED;
                                    encryptionAlgorithm = EncryptionAlgEnum.AES256_CBC;
                                    localProfileId = "rem";
                                    mdnResponse = MdnResponseEnum.SYNC;
                                    mdnSigningAlgorithm = MdnSigningAlgEnum.SHA384;
                                    messageSubject = "repellat";
                                    partnerProfileId = "alias";
                                    signingAlgorithm = SigningAlgEnum.SHA384;
                                }};;
                                loggingRole = "perspiciatis";
                                url = "nihil";
                            }};, UpdateConnectorXAmzTargetEnum.TRANSFER_SERVICE_UPDATE_CONNECTOR) {{
                xAmzAlgorithm = "mollitia";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "alias";
                xAmzDate = "maiores";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "dolores";
                xAmzSignedHeaders = "id";
            }};            

            UpdateConnectorResponse res = sdk.sdk.updateConnector(req);

            if (res.updateConnectorResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateHostKey

Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateHostKeyRequest;
import org.openapis.openapi.models.operations.UpdateHostKeyResponse;
import org.openapis.openapi.models.operations.UpdateHostKeyXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateHostKeyRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateHostKeyRequest req = new UpdateHostKeyRequest(                new UpdateHostKeyRequest("dolore", "dolorum", "nesciunt");, UpdateHostKeyXAmzTargetEnum.TRANSFER_SERVICE_UPDATE_HOST_KEY) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "omnis";
                xAmzDate = "quaerat";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "ut";
            }};            

            UpdateHostKeyResponse res = sdk.sdk.updateHostKey(req);

            if (res.updateHostKeyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProfile

Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProfileRequest;
import org.openapis.openapi.models.operations.UpdateProfileResponse;
import org.openapis.openapi.models.operations.UpdateProfileXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateProfileRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("culpa") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProfileRequest req = new UpdateProfileRequest(                new UpdateProfileRequest("adipisci") {{
                                certificateIds = new String[]{{
                                    add("laudantium"),
                                    add("eum"),
                                    add("nemo"),
                                    add("recusandae"),
                                }};
                            }};, UpdateProfileXAmzTargetEnum.TRANSFER_SERVICE_UPDATE_PROFILE) {{
                xAmzAlgorithm = "esse";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quis";
                xAmzDate = "eum";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "aspernatur";
            }};            

            UpdateProfileResponse res = sdk.sdk.updateProfile(req);

            if (res.updateProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateServer

<p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateServerRequest;
import org.openapis.openapi.models.operations.UpdateServerResponse;
import org.openapis.openapi.models.operations.UpdateServerXAmzTargetEnum;
import org.openapis.openapi.models.shared.As2TransportEnum;
import org.openapis.openapi.models.shared.EndpointDetails;
import org.openapis.openapi.models.shared.EndpointTypeEnum;
import org.openapis.openapi.models.shared.IdentityProviderDetails;
import org.openapis.openapi.models.shared.ProtocolDetails;
import org.openapis.openapi.models.shared.ProtocolEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SetStatOptionEnum;
import org.openapis.openapi.models.shared.TlsSessionResumptionModeEnum;
import org.openapis.openapi.models.shared.UpdateServerRequest;
import org.openapis.openapi.models.shared.WorkflowDetail;
import org.openapis.openapi.models.shared.WorkflowDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateServerRequest req = new UpdateServerRequest(                new UpdateServerRequest("quasi") {{
                                certificate = "animi";
                                endpointDetails = new EndpointDetails() {{
                                    addressAllocationIds = new String[]{{
                                        add("mollitia"),
                                        add("provident"),
                                    }};
                                    securityGroupIds = new String[]{{
                                        add("animi"),
                                        add("ex"),
                                        add("aliquid"),
                                        add("accusantium"),
                                    }};
                                    subnetIds = new String[]{{
                                        add("doloribus"),
                                        add("ullam"),
                                        add("in"),
                                        add("nam"),
                                    }};
                                    vpcEndpointId = "earum";
                                    vpcId = "officia";
                                }};;
                                endpointType = EndpointTypeEnum.VPC_ENDPOINT;
                                hostKey = "placeat";
                                identityProviderDetails = new IdentityProviderDetails() {{
                                    directoryId = "modi";
                                    function = "voluptatibus";
                                    invocationRole = "molestias";
                                    url = "officiis";
                                }};;
                                loggingRole = "sapiente";
                                postAuthenticationLoginBanner = "cumque";
                                preAuthenticationLoginBanner = "vitae";
                                protocolDetails = new ProtocolDetails() {{
                                    as2Transports = new org.openapis.openapi.models.shared.As2TransportEnum[]{{
                                        add(As2TransportEnum.HTTP),
                                        add(As2TransportEnum.HTTP),
                                        add(As2TransportEnum.HTTP),
                                    }};
                                    passiveIp = "tempora";
                                    setStatOption = SetStatOptionEnum.DEFAULT_;
                                    tlsSessionResumptionMode = TlsSessionResumptionModeEnum.DISABLED;
                                }};;
                                protocols = new org.openapis.openapi.models.shared.ProtocolEnum[]{{
                                    add(ProtocolEnum.AS2),
                                }};
                                securityPolicyName = "quae";
                                workflowDetails = new WorkflowDetails() {{
                                    onPartialUpload = new org.openapis.openapi.models.shared.WorkflowDetail[]{{
                                        add(new WorkflowDetail("eum", "eius") {{
                                            executionRole = "velit";
                                            workflowId = "aspernatur";
                                        }}),
                                    }};
                                    onUpload = new org.openapis.openapi.models.shared.WorkflowDetail[]{{
                                        add(new WorkflowDetail("eos", "sapiente") {{
                                            executionRole = "at";
                                            workflowId = "impedit";
                                        }}),
                                        add(new WorkflowDetail("minima", "beatae") {{
                                            executionRole = "eum";
                                            workflowId = "dicta";
                                        }}),
                                        add(new WorkflowDetail("earum", "soluta") {{
                                            executionRole = "cupiditate";
                                            workflowId = "provident";
                                        }}),
                                    }};
                                }};;
                            }};, UpdateServerXAmzTargetEnum.TRANSFER_SERVICE_UPDATE_SERVER) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "illum";
                xAmzCredential = "eaque";
                xAmzDate = "earum";
                xAmzSecurityToken = "perspiciatis";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "debitis";
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

## updateUser

<p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateUserRequest;
import org.openapis.openapi.models.operations.UpdateUserResponse;
import org.openapis.openapi.models.operations.UpdateUserXAmzTargetEnum;
import org.openapis.openapi.models.shared.HomeDirectoryMapEntry;
import org.openapis.openapi.models.shared.HomeDirectoryTypeEnum;
import org.openapis.openapi.models.shared.PosixProfile;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateUserRequest req = new UpdateUserRequest(                new UpdateUserRequest("porro", "suscipit") {{
                                homeDirectory = "dolorem";
                                homeDirectoryMappings = new org.openapis.openapi.models.shared.HomeDirectoryMapEntry[]{{
                                    add(new HomeDirectoryMapEntry("ratione", "animi") {{
                                        entry = "cumque";
                                        target = "fuga";
                                    }}),
                                }};
                                homeDirectoryType = HomeDirectoryTypeEnum.LOGICAL;
                                policy = "nulla";
                                posixProfile = new PosixProfile(8931L, 97258L) {{
                                    secondaryGids = new Long[]{{
                                        add(497777L),
                                    }};
                                }};;
                                role = "natus";
                            }};, UpdateUserXAmzTargetEnum.TRANSFER_SERVICE_UPDATE_USER) {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "adipisci";
                xAmzDate = "quasi";
                xAmzSecurityToken = "magni";
                xAmzSignature = "doloribus";
                xAmzSignedHeaders = "nulla";
            }};            

            UpdateUserResponse res = sdk.sdk.updateUser(req);

            if (res.updateUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
