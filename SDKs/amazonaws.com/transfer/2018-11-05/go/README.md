# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/transfer/2018-11-05/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAccessRequest{
        Headers: operations.CreateAccessHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "TransferService.CreateAccess",
        },
        Request: shared.CreateAccessRequest{
            ExternalID: "illum",
            HomeDirectory: "vel",
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "deserunt",
                    Target: "suscipit",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "iure",
                    Target: "magnam",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "debitis",
                    Target: "ipsa",
                },
            },
            HomeDirectoryType: "LOGICAL",
            Policy: "tempora",
            PosixProfile: &shared.PosixProfile{
                Gid: 383441,
                SecondaryGids: []int64{
                    791725,
                    812169,
                },
                UID: 528895,
            },
            Role: "iusto",
            ServerID: "excepturi",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAccess(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAccessResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateAccess` - Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
* `CreateAgreement` - <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
* `CreateConnector` - Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.
* `CreateProfile` - Creates the local or partner profile to use for AS2 transfers.
* `CreateServer` - Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
* `CreateUser` - Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
* `CreateWorkflow` -  Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 
* `DeleteAccess` - Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* `DeleteAgreement` - Delete the agreement that's specified in the provided <code>AgreementId</code>.
* `DeleteCertificate` - Deletes the certificate that's specified in the <code>CertificateId</code> parameter.
* `DeleteConnector` - Deletes the agreement that's specified in the provided <code>ConnectorId</code>.
* `DeleteHostKey` - Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.
* `DeleteProfile` - Deletes the profile that's specified in the <code>ProfileId</code> parameter.
* `DeleteServer` - <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
* `DeleteSSHPublicKey` - Deletes a user's Secure Shell (SSH) public key.
* `DeleteUser` - <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
* `DeleteWorkflow` - Deletes the specified workflow.
* `DescribeAccess` - <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
* `DescribeAgreement` - Describes the agreement that's identified by the <code>AgreementId</code>.
* `DescribeCertificate` - Describes the certificate that's identified by the <code>CertificateId</code>.
* `DescribeConnector` - Describes the connector that's identified by the <code>ConnectorId.</code> 
* `DescribeExecution` - You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.
* `DescribeHostKey` - Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.
* `DescribeProfile` - Returns the details of the profile that's specified by the <code>ProfileId</code>.
* `DescribeSecurityPolicy` - Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
* `DescribeServer` - <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
* `DescribeUser` - <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
* `DescribeWorkflow` - Describes the specified workflow.
* `ImportCertificate` - Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
* `ImportHostKey` - Adds a host key to the server that's specified by the <code>ServerId</code> parameter.
* `ImportSSHPublicKey` - <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
* `ListAccesses` - Lists the details for all the accesses you have on your server.
* `ListAgreements` - Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.
* `ListCertificates` - Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.
* `ListConnectors` - Lists the connectors for the specified Region.
* `ListExecutions` - Lists all executions for the specified workflow.
* `ListHostKeys` - Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.
* `ListProfiles` - Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.
* `ListSecurityPolicies` - Lists the security policies that are attached to your file transfer protocol-enabled servers.
* `ListServers` - Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
* `ListTagsForResource` - Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
* `ListUsers` - Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
* `ListWorkflows` - Lists all of your workflows.
* `SendWorkflowStepState` - <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
* `StartFileTransfer` - Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 
* `StartServer` - <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* `StopServer` - <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* `TagResource` - <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
* `TestIdentityProvider` - <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>
* `UntagResource` - <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
* `UpdateAccess` - Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* `UpdateAgreement` - Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.
* `UpdateCertificate` - Updates the active and inactive dates for a certificate.
* `UpdateConnector` - Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.
* `UpdateHostKey` - Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.
* `UpdateProfile` - Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.
* `UpdateServer` - <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
* `UpdateUser` - <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
