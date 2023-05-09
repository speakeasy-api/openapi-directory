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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateAccess(ctx, operations.CreateAccessRequest{
        CreateAccessRequest: shared.CreateAccessRequest{
            ExternalID: "corrupti",
            HomeDirectory: sdk.String("provident"),
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "quibusdam",
                    Target: "unde",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "nulla",
                    Target: "corrupti",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "illum",
                    Target: "vel",
                },
            },
            HomeDirectoryType: shared.HomeDirectoryTypeEnumLogical.ToPointer(),
            Policy: sdk.String("deserunt"),
            PosixProfile: &shared.PosixProfile{
                Gid: 384382,
                SecondaryGids: []int64{
                    297534,
                    891773,
                },
                UID: 56713,
            },
            Role: "delectus",
            ServerID: "tempora",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("placeat"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.CreateAccessXAmzTargetEnumTransferServiceCreateAccess,
    })
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
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateAccess](docs/sdk/README.md#createaccess) - Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
* [CreateAgreement](docs/sdk/README.md#createagreement) - <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
* [CreateConnector](docs/sdk/README.md#createconnector) - Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.
* [CreateProfile](docs/sdk/README.md#createprofile) - Creates the local or partner profile to use for AS2 transfers.
* [CreateServer](docs/sdk/README.md#createserver) - Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
* [CreateUser](docs/sdk/README.md#createuser) - Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
* [CreateWorkflow](docs/sdk/README.md#createworkflow) -  Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 
* [DeleteAccess](docs/sdk/README.md#deleteaccess) - Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* [DeleteAgreement](docs/sdk/README.md#deleteagreement) - Delete the agreement that's specified in the provided <code>AgreementId</code>.
* [DeleteCertificate](docs/sdk/README.md#deletecertificate) - Deletes the certificate that's specified in the <code>CertificateId</code> parameter.
* [DeleteConnector](docs/sdk/README.md#deleteconnector) - Deletes the agreement that's specified in the provided <code>ConnectorId</code>.
* [DeleteHostKey](docs/sdk/README.md#deletehostkey) - Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.
* [DeleteProfile](docs/sdk/README.md#deleteprofile) - Deletes the profile that's specified in the <code>ProfileId</code> parameter.
* [DeleteServer](docs/sdk/README.md#deleteserver) - <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
* [DeleteSSHPublicKey](docs/sdk/README.md#deletesshpublickey) - Deletes a user's Secure Shell (SSH) public key.
* [DeleteUser](docs/sdk/README.md#deleteuser) - <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
* [DeleteWorkflow](docs/sdk/README.md#deleteworkflow) - Deletes the specified workflow.
* [DescribeAccess](docs/sdk/README.md#describeaccess) - <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
* [DescribeAgreement](docs/sdk/README.md#describeagreement) - Describes the agreement that's identified by the <code>AgreementId</code>.
* [DescribeCertificate](docs/sdk/README.md#describecertificate) - Describes the certificate that's identified by the <code>CertificateId</code>.
* [DescribeConnector](docs/sdk/README.md#describeconnector) - Describes the connector that's identified by the <code>ConnectorId.</code> 
* [DescribeExecution](docs/sdk/README.md#describeexecution) - You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.
* [DescribeHostKey](docs/sdk/README.md#describehostkey) - Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.
* [DescribeProfile](docs/sdk/README.md#describeprofile) - Returns the details of the profile that's specified by the <code>ProfileId</code>.
* [DescribeSecurityPolicy](docs/sdk/README.md#describesecuritypolicy) - Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
* [DescribeServer](docs/sdk/README.md#describeserver) - <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
* [DescribeUser](docs/sdk/README.md#describeuser) - <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
* [DescribeWorkflow](docs/sdk/README.md#describeworkflow) - Describes the specified workflow.
* [ImportCertificate](docs/sdk/README.md#importcertificate) - Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
* [ImportHostKey](docs/sdk/README.md#importhostkey) - Adds a host key to the server that's specified by the <code>ServerId</code> parameter.
* [ImportSSHPublicKey](docs/sdk/README.md#importsshpublickey) - <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
* [ListAccesses](docs/sdk/README.md#listaccesses) - Lists the details for all the accesses you have on your server.
* [ListAgreements](docs/sdk/README.md#listagreements) - Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.
* [ListCertificates](docs/sdk/README.md#listcertificates) - Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.
* [ListConnectors](docs/sdk/README.md#listconnectors) - Lists the connectors for the specified Region.
* [ListExecutions](docs/sdk/README.md#listexecutions) - Lists all executions for the specified workflow.
* [ListHostKeys](docs/sdk/README.md#listhostkeys) - Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.
* [ListProfiles](docs/sdk/README.md#listprofiles) - Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.
* [ListSecurityPolicies](docs/sdk/README.md#listsecuritypolicies) - Lists the security policies that are attached to your file transfer protocol-enabled servers.
* [ListServers](docs/sdk/README.md#listservers) - Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
* [ListUsers](docs/sdk/README.md#listusers) - Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
* [ListWorkflows](docs/sdk/README.md#listworkflows) - Lists all of your workflows.
* [SendWorkflowStepState](docs/sdk/README.md#sendworkflowstepstate) - <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
* [StartFileTransfer](docs/sdk/README.md#startfiletransfer) - Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 
* [StartServer](docs/sdk/README.md#startserver) - <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* [StopServer](docs/sdk/README.md#stopserver) - <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* [TagResource](docs/sdk/README.md#tagresource) - <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
* [TestIdentityProvider](docs/sdk/README.md#testidentityprovider) - <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>
* [UntagResource](docs/sdk/README.md#untagresource) - <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
* [UpdateAccess](docs/sdk/README.md#updateaccess) - Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* [UpdateAgreement](docs/sdk/README.md#updateagreement) - Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.
* [UpdateCertificate](docs/sdk/README.md#updatecertificate) - Updates the active and inactive dates for a certificate.
* [UpdateConnector](docs/sdk/README.md#updateconnector) - Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.
* [UpdateHostKey](docs/sdk/README.md#updatehostkey) - Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.
* [UpdateProfile](docs/sdk/README.md#updateprofile) - Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.
* [UpdateServer](docs/sdk/README.md#updateserver) - <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
* [UpdateUser](docs/sdk/README.md#updateuser) - <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
