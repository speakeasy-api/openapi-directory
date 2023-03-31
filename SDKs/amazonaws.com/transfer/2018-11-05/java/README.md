# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateAccessXAmzTargetEnum;
import org.openapis.openapi.models.operations.CreateAccessHeaders;
import org.openapis.openapi.models.operations.CreateAccessRequest;
import org.openapis.openapi.models.operations.CreateAccessResponse;
import org.openapis.openapi.models.shared.CreateAccessRequest;
import org.openapis.openapi.models.shared.PosixProfile;
import org.openapis.openapi.models.shared.HomeDirectoryTypeEnum;
import org.openapis.openapi.models.shared.HomeDirectoryMapEntry;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateAccessRequest req = new CreateAccessRequest() {{
                headers = new CreateAccessHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "TransferService.CreateAccess";
                }};
                request = new CreateAccessRequest() {{
                    externalId = "illum";
                    homeDirectory = "vel";
                    homeDirectoryMappings = new org.openapis.openapi.models.shared.HomeDirectoryMapEntry[]{{
                        add(new HomeDirectoryMapEntry() {{
                            entry = "deserunt";
                            target = "suscipit";
                        }}),
                        add(new HomeDirectoryMapEntry() {{
                            entry = "iure";
                            target = "magnam";
                        }}),
                        add(new HomeDirectoryMapEntry() {{
                            entry = "debitis";
                            target = "ipsa";
                        }}),
                    }};
                    homeDirectoryType = "LOGICAL";
                    policy = "tempora";
                    posixProfile = new PosixProfile() {{
                        gid = 383441;
                        secondaryGids = new Long[]{{
                            add(791725),
                            add(812169),
                        }};
                        uid = 528895;
                    }};
                    role = "iusto";
                    serverId = "excepturi";
                }};
            }};            

            CreateAccessResponse res = sdk.createAccess(req);

            if (res.createAccessResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createAccess` - Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
* `createAgreement` - <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
* `createConnector` - Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.
* `createProfile` - Creates the local or partner profile to use for AS2 transfers.
* `createServer` - Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
* `createUser` - Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
* `createWorkflow` -  Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 
* `deleteAccess` - Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* `deleteAgreement` - Delete the agreement that's specified in the provided <code>AgreementId</code>.
* `deleteCertificate` - Deletes the certificate that's specified in the <code>CertificateId</code> parameter.
* `deleteConnector` - Deletes the agreement that's specified in the provided <code>ConnectorId</code>.
* `deleteHostKey` - Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.
* `deleteProfile` - Deletes the profile that's specified in the <code>ProfileId</code> parameter.
* `deleteServer` - <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
* `deleteSshPublicKey` - Deletes a user's Secure Shell (SSH) public key.
* `deleteUser` - <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
* `deleteWorkflow` - Deletes the specified workflow.
* `describeAccess` - <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
* `describeAgreement` - Describes the agreement that's identified by the <code>AgreementId</code>.
* `describeCertificate` - Describes the certificate that's identified by the <code>CertificateId</code>.
* `describeConnector` - Describes the connector that's identified by the <code>ConnectorId.</code> 
* `describeExecution` - You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.
* `describeHostKey` - Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.
* `describeProfile` - Returns the details of the profile that's specified by the <code>ProfileId</code>.
* `describeSecurityPolicy` - Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
* `describeServer` - <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
* `describeUser` - <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
* `describeWorkflow` - Describes the specified workflow.
* `importCertificate` - Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
* `importHostKey` - Adds a host key to the server that's specified by the <code>ServerId</code> parameter.
* `importSshPublicKey` - <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
* `listAccesses` - Lists the details for all the accesses you have on your server.
* `listAgreements` - Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.
* `listCertificates` - Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.
* `listConnectors` - Lists the connectors for the specified Region.
* `listExecutions` - Lists all executions for the specified workflow.
* `listHostKeys` - Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.
* `listProfiles` - Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.
* `listSecurityPolicies` - Lists the security policies that are attached to your file transfer protocol-enabled servers.
* `listServers` - Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
* `listTagsForResource` - Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
* `listUsers` - Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
* `listWorkflows` - Lists all of your workflows.
* `sendWorkflowStepState` - <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
* `startFileTransfer` - Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 
* `startServer` - <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* `stopServer` - <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* `tagResource` - <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
* `testIdentityProvider` - <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>
* `untagResource` - <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
* `updateAccess` - Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* `updateAgreement` - Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.
* `updateCertificate` - Updates the active and inactive dates for a certificate.
* `updateConnector` - Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.
* `updateHostKey` - Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.
* `updateProfile` - Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.
* `updateServer` - <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
* `updateUser` - <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
