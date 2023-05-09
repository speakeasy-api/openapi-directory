# SDK

## Overview

Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS. Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3. Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with Amazon Web Services for processing, analytics, machine learning, and archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and set up.

Amazon Web Services documentation
<https://docs.aws.amazon.com/transfer/>
### Available Operations

* [CreateAccess](#createaccess) - Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
* [CreateAgreement](#createagreement) - <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
* [CreateConnector](#createconnector) - Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.
* [CreateProfile](#createprofile) - Creates the local or partner profile to use for AS2 transfers.
* [CreateServer](#createserver) - Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
* [CreateUser](#createuser) - Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
* [CreateWorkflow](#createworkflow) -  Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 
* [DeleteAccess](#deleteaccess) - Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* [DeleteAgreement](#deleteagreement) - Delete the agreement that's specified in the provided <code>AgreementId</code>.
* [DeleteCertificate](#deletecertificate) - Deletes the certificate that's specified in the <code>CertificateId</code> parameter.
* [DeleteConnector](#deleteconnector) - Deletes the agreement that's specified in the provided <code>ConnectorId</code>.
* [DeleteHostKey](#deletehostkey) - Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.
* [DeleteProfile](#deleteprofile) - Deletes the profile that's specified in the <code>ProfileId</code> parameter.
* [DeleteServer](#deleteserver) - <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
* [DeleteSSHPublicKey](#deletesshpublickey) - Deletes a user's Secure Shell (SSH) public key.
* [DeleteUser](#deleteuser) - <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
* [DeleteWorkflow](#deleteworkflow) - Deletes the specified workflow.
* [DescribeAccess](#describeaccess) - <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
* [DescribeAgreement](#describeagreement) - Describes the agreement that's identified by the <code>AgreementId</code>.
* [DescribeCertificate](#describecertificate) - Describes the certificate that's identified by the <code>CertificateId</code>.
* [DescribeConnector](#describeconnector) - Describes the connector that's identified by the <code>ConnectorId.</code> 
* [DescribeExecution](#describeexecution) - You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.
* [DescribeHostKey](#describehostkey) - Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.
* [DescribeProfile](#describeprofile) - Returns the details of the profile that's specified by the <code>ProfileId</code>.
* [DescribeSecurityPolicy](#describesecuritypolicy) - Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
* [DescribeServer](#describeserver) - <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
* [DescribeUser](#describeuser) - <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
* [DescribeWorkflow](#describeworkflow) - Describes the specified workflow.
* [ImportCertificate](#importcertificate) - Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
* [ImportHostKey](#importhostkey) - Adds a host key to the server that's specified by the <code>ServerId</code> parameter.
* [ImportSSHPublicKey](#importsshpublickey) - <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
* [ListAccesses](#listaccesses) - Lists the details for all the accesses you have on your server.
* [ListAgreements](#listagreements) - Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.
* [ListCertificates](#listcertificates) - Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.
* [ListConnectors](#listconnectors) - Lists the connectors for the specified Region.
* [ListExecutions](#listexecutions) - Lists all executions for the specified workflow.
* [ListHostKeys](#listhostkeys) - Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.
* [ListProfiles](#listprofiles) - Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.
* [ListSecurityPolicies](#listsecuritypolicies) - Lists the security policies that are attached to your file transfer protocol-enabled servers.
* [ListServers](#listservers) - Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
* [ListTagsForResource](#listtagsforresource) - Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
* [ListUsers](#listusers) - Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
* [ListWorkflows](#listworkflows) - Lists all of your workflows.
* [SendWorkflowStepState](#sendworkflowstepstate) - <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
* [StartFileTransfer](#startfiletransfer) - Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 
* [StartServer](#startserver) - <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* [StopServer](#stopserver) - <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
* [TagResource](#tagresource) - <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
* [TestIdentityProvider](#testidentityprovider) - <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>
* [UntagResource](#untagresource) - <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
* [UpdateAccess](#updateaccess) - Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
* [UpdateAgreement](#updateagreement) - Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.
* [UpdateCertificate](#updatecertificate) - Updates the active and inactive dates for a certificate.
* [UpdateConnector](#updateconnector) - Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.
* [UpdateHostKey](#updatehostkey) - Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.
* [UpdateProfile](#updateprofile) - Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.
* [UpdateServer](#updateserver) - <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
* [UpdateUser](#updateuser) - <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>

## CreateAccess

Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.

### Example Usage

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
    res, err := s.SDK.CreateAccess(ctx, operations.CreateAccessRequest{
        CreateAccessRequest: shared.CreateAccessRequest{
            ExternalID: "nisi",
            HomeDirectory: sdk.String("recusandae"),
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "ab",
                    Target: "quis",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "veritatis",
                    Target: "deserunt",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "perferendis",
                    Target: "ipsam",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "repellendus",
                    Target: "sapiente",
                },
            },
            HomeDirectoryType: shared.HomeDirectoryTypeEnumLogical.ToPointer(),
            Policy: sdk.String("odit"),
            PosixProfile: &shared.PosixProfile{
                Gid: 870013,
                SecondaryGids: []int64{
                    978619,
                    473608,
                    799159,
                    800911,
                },
                UID: 461479,
            },
            Role: "totam",
            ServerID: "porro",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("deleniti"),
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

## CreateAgreement

<p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>

### Example Usage

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
    res, err := s.SDK.CreateAgreement(ctx, operations.CreateAgreementRequest{
        CreateAgreementRequest: shared.CreateAgreementRequest{
            AccessRole: "hic",
            BaseDirectory: "optio",
            Description: sdk.String("totam"),
            LocalProfileID: "beatae",
            PartnerProfileID: "commodi",
            ServerID: "molestiae",
            Status: shared.AgreementStatusTypeEnumActive.ToPointer(),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "impedit",
                    Value: "cum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("aspernatur"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.CreateAgreementXAmzTargetEnumTransferServiceCreateAgreement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAgreementResponse != nil {
        // handle response
    }
}
```

## CreateConnector

Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.

### Example Usage

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
    res, err := s.SDK.CreateConnector(ctx, operations.CreateConnectorRequest{
        CreateConnectorRequest: shared.CreateConnectorRequest{
            AccessRole: "sed",
            As2Config: shared.As2ConnectorConfig{
                Compression: shared.CompressionEnumEnumDisabled.ToPointer(),
                EncryptionAlgorithm: shared.EncryptionAlgEnumAes128Cbc.ToPointer(),
                LocalProfileID: sdk.String("natus"),
                MdnResponse: shared.MdnResponseEnumSync.ToPointer(),
                MdnSigningAlgorithm: shared.MdnSigningAlgEnumDefault.ToPointer(),
                MessageSubject: sdk.String("saepe"),
                PartnerProfileID: sdk.String("fuga"),
                SigningAlgorithm: shared.SigningAlgEnumSha512.ToPointer(),
            },
            LoggingRole: sdk.String("corporis"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "iure",
                    Value: "saepe",
                },
                shared.Tag{
                    Key: "quidem",
                    Value: "architecto",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "reiciendis",
                },
            },
            URL: "est",
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzTarget: operations.CreateConnectorXAmzTargetEnumTransferServiceCreateConnector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateConnectorResponse != nil {
        // handle response
    }
}
```

## CreateProfile

Creates the local or partner profile to use for AS2 transfers.

### Example Usage

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
    res, err := s.SDK.CreateProfile(ctx, operations.CreateProfileRequest{
        CreateProfileRequest: shared.CreateProfileRequest{
            As2ID: "enim",
            CertificateIds: []string{
                "nemo",
                "minima",
                "excepturi",
            },
            ProfileType: shared.ProfileTypeEnumLocal,
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "culpa",
                    Value: "doloribus",
                },
                shared.Tag{
                    Key: "sapiente",
                    Value: "architecto",
                },
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("culpa"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellat"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.CreateProfileXAmzTargetEnumTransferServiceCreateProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProfileResponse != nil {
        // handle response
    }
}
```

## CreateServer

Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.

### Example Usage

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
    res, err := s.SDK.CreateServer(ctx, operations.CreateServerRequest{
        CreateServerRequest: shared.CreateServerRequest{
            Certificate: sdk.String("numquam"),
            Domain: shared.DomainEnumS3.ToPointer(),
            EndpointDetails: &shared.EndpointDetails{
                AddressAllocationIds: []string{
                    "molestiae",
                    "velit",
                },
                SecurityGroupIds: []string{
                    "quia",
                    "quis",
                    "vitae",
                },
                SubnetIds: []string{
                    "animi",
                    "enim",
                    "odit",
                },
                VpcEndpointID: sdk.String("quo"),
                VpcID: sdk.String("sequi"),
            },
            EndpointType: shared.EndpointTypeEnumVpcEndpoint.ToPointer(),
            HostKey: sdk.String("ipsam"),
            IdentityProviderDetails: &shared.IdentityProviderDetails{
                DirectoryID: sdk.String("id"),
                Function: sdk.String("possimus"),
                InvocationRole: sdk.String("aut"),
                URL: sdk.String("quasi"),
            },
            IdentityProviderType: shared.IdentityProviderTypeEnumAwsDirectoryService.ToPointer(),
            LoggingRole: sdk.String("temporibus"),
            PostAuthenticationLoginBanner: sdk.String("laborum"),
            PreAuthenticationLoginBanner: sdk.String("quasi"),
            ProtocolDetails: &shared.ProtocolDetails{
                As2Transports: []shared.As2TransportEnum{
                    shared.As2TransportEnumHTTP,
                    shared.As2TransportEnumHTTP,
                    shared.As2TransportEnumHTTP,
                    shared.As2TransportEnumHTTP,
                },
                PassiveIP: sdk.String("voluptatibus"),
                SetStatOption: shared.SetStatOptionEnumEnableNoOp.ToPointer(),
                TLSSessionResumptionMode: shared.TLSSessionResumptionModeEnumEnabled.ToPointer(),
            },
            Protocols: []shared.ProtocolEnum{
                shared.ProtocolEnumAs2,
                shared.ProtocolEnumSftp,
                shared.ProtocolEnumFtps,
            },
            SecurityPolicyName: sdk.String("voluptate"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "perferendis",
                    Value: "doloremque",
                },
                shared.Tag{
                    Key: "reprehenderit",
                    Value: "ut",
                },
                shared.Tag{
                    Key: "maiores",
                    Value: "dicta",
                },
            },
            WorkflowDetails: &shared.WorkflowDetails{
                OnPartialUpload: []shared.WorkflowDetail{
                    shared.WorkflowDetail{
                        ExecutionRole: "dolore",
                        WorkflowID: "iusto",
                    },
                    shared.WorkflowDetail{
                        ExecutionRole: "dicta",
                        WorkflowID: "harum",
                    },
                },
                OnUpload: []shared.WorkflowDetail{
                    shared.WorkflowDetail{
                        ExecutionRole: "accusamus",
                        WorkflowID: "commodi",
                    },
                    shared.WorkflowDetail{
                        ExecutionRole: "repudiandae",
                        WorkflowID: "quae",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("modi"),
        XAmzSignedHeaders: sdk.String("praesentium"),
        XAmzTarget: operations.CreateServerXAmzTargetEnumTransferServiceCreateServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateServerResponse != nil {
        // handle response
    }
}
```

## CreateUser

Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.

### Example Usage

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
    res, err := s.SDK.CreateUser(ctx, operations.CreateUserRequest{
        CreateUserRequest: shared.CreateUserRequest{
            HomeDirectory: sdk.String("rem"),
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "quasi",
                    Target: "repudiandae",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "sint",
                    Target: "veritatis",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "itaque",
                    Target: "incidunt",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "enim",
                    Target: "consequatur",
                },
            },
            HomeDirectoryType: shared.HomeDirectoryTypeEnumLogical.ToPointer(),
            Policy: sdk.String("quibusdam"),
            PosixProfile: &shared.PosixProfile{
                Gid: 131797,
                SecondaryGids: []int64{
                    716327,
                    841386,
                    289406,
                },
                UID: 264730,
            },
            Role: "qui",
            ServerID: "aliquid",
            SSHPublicKeyBody: sdk.String("cupiditate"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "perferendis",
                    Value: "magni",
                },
                shared.Tag{
                    Key: "assumenda",
                    Value: "ipsam",
                },
                shared.Tag{
                    Key: "alias",
                    Value: "fugit",
                },
            },
            UserName: "Mariano70",
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.CreateUserXAmzTargetEnumTransferServiceCreateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUserResponse != nil {
        // handle response
    }
}
```

## CreateWorkflow

 Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 

### Example Usage

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
    res, err := s.SDK.CreateWorkflow(ctx, operations.CreateWorkflowRequest{
        CreateWorkflowRequest: shared.CreateWorkflowRequest{
            Description: sdk.String("aliquid"),
            OnExceptionSteps: []shared.WorkflowStep{
                shared.WorkflowStep{
                    CopyStepDetails: &shared.CopyStepDetails{
                        DestinationFileLocation: &shared.InputFileLocation{
                            EfsFileLocation: &shared.EfsFileLocation{
                                FileSystemID: sdk.String("necessitatibus"),
                                Path: sdk.String("sint"),
                            },
                            S3FileLocation: &shared.S3InputFileLocation{
                                Bucket: sdk.String("officia"),
                                Key: sdk.String("dolor"),
                            },
                        },
                        Name: sdk.String("Randal Parisian"),
                        OverwriteExisting: shared.OverwriteExistingEnumFalse.ToPointer(),
                        SourceFileLocation: sdk.String("maiores"),
                    },
                    CustomStepDetails: &shared.CustomStepDetails{
                        Name: sdk.String("Keith Gulgowski"),
                        SourceFileLocation: sdk.String("ea"),
                        Target: sdk.String("aliquid"),
                        TimeoutSeconds: sdk.Int64(675439),
                    },
                    DecryptStepDetails: &shared.DecryptStepDetails{
                        DestinationFileLocation: shared.InputFileLocation{
                            EfsFileLocation: &shared.EfsFileLocation{
                                FileSystemID: sdk.String("accusamus"),
                                Path: sdk.String("non"),
                            },
                            S3FileLocation: &shared.S3InputFileLocation{
                                Bucket: sdk.String("occaecati"),
                                Key: sdk.String("enim"),
                            },
                        },
                        Name: sdk.String("Toby Pouros"),
                        OverwriteExisting: shared.OverwriteExistingEnumFalse.ToPointer(),
                        SourceFileLocation: sdk.String("blanditiis"),
                        Type: shared.EncryptionTypeEnumPgp,
                    },
                    DeleteStepDetails: &shared.DeleteStepDetails{
                        Name: sdk.String("Timmy Feeney"),
                        SourceFileLocation: sdk.String("vel"),
                    },
                    TagStepDetails: &shared.TagStepDetails{
                        Name: sdk.String("Ms. Arturo Krajcik"),
                        SourceFileLocation: sdk.String("distinctio"),
                        Tags: []shared.S3Tag{
                            shared.S3Tag{
                                Key: "labore",
                                Value: "labore",
                            },
                            shared.S3Tag{
                                Key: "suscipit",
                                Value: "natus",
                            },
                            shared.S3Tag{
                                Key: "nobis",
                                Value: "eum",
                            },
                        },
                    },
                    Type: shared.WorkflowStepTypeEnumDecrypt.ToPointer(),
                },
                shared.WorkflowStep{
                    CopyStepDetails: &shared.CopyStepDetails{
                        DestinationFileLocation: &shared.InputFileLocation{
                            EfsFileLocation: &shared.EfsFileLocation{
                                FileSystemID: sdk.String("aspernatur"),
                                Path: sdk.String("architecto"),
                            },
                            S3FileLocation: &shared.S3InputFileLocation{
                                Bucket: sdk.String("magnam"),
                                Key: sdk.String("et"),
                            },
                        },
                        Name: sdk.String("Derrick McLaughlin"),
                        OverwriteExisting: shared.OverwriteExistingEnumTrue.ToPointer(),
                        SourceFileLocation: sdk.String("mollitia"),
                    },
                    CustomStepDetails: &shared.CustomStepDetails{
                        Name: sdk.String("Shaun Hammes"),
                        SourceFileLocation: sdk.String("necessitatibus"),
                        Target: sdk.String("odit"),
                        TimeoutSeconds: sdk.Int64(367562),
                    },
                    DecryptStepDetails: &shared.DecryptStepDetails{
                        DestinationFileLocation: shared.InputFileLocation{
                            EfsFileLocation: &shared.EfsFileLocation{
                                FileSystemID: sdk.String("quasi"),
                                Path: sdk.String("iure"),
                            },
                            S3FileLocation: &shared.S3InputFileLocation{
                                Bucket: sdk.String("doloribus"),
                                Key: sdk.String("debitis"),
                            },
                        },
                        Name: sdk.String("Jasmine Lind"),
                        OverwriteExisting: shared.OverwriteExistingEnumTrue.ToPointer(),
                        SourceFileLocation: sdk.String("architecto"),
                        Type: shared.EncryptionTypeEnumPgp,
                    },
                    DeleteStepDetails: &shared.DeleteStepDetails{
                        Name: sdk.String("Pedro Ratke"),
                        SourceFileLocation: sdk.String("quibusdam"),
                    },
                    TagStepDetails: &shared.TagStepDetails{
                        Name: sdk.String("Mr. Jenna Stroman"),
                        SourceFileLocation: sdk.String("natus"),
                        Tags: []shared.S3Tag{
                            shared.S3Tag{
                                Key: "sunt",
                                Value: "quo",
                            },
                        },
                    },
                    Type: shared.WorkflowStepTypeEnumDecrypt.ToPointer(),
                },
                shared.WorkflowStep{
                    CopyStepDetails: &shared.CopyStepDetails{
                        DestinationFileLocation: &shared.InputFileLocation{
                            EfsFileLocation: &shared.EfsFileLocation{
                                FileSystemID: sdk.String("pariatur"),
                                Path: sdk.String("maxime"),
                            },
                            S3FileLocation: &shared.S3InputFileLocation{
                                Bucket: sdk.String("ea"),
                                Key: sdk.String("excepturi"),
                            },
                        },
                        Name: sdk.String("Dr. Rosemary Bartoletti"),
                        OverwriteExisting: shared.OverwriteExistingEnumTrue.ToPointer(),
                        SourceFileLocation: sdk.String("voluptate"),
                    },
                    CustomStepDetails: &shared.CustomStepDetails{
                        Name: sdk.String("Candice Beatty"),
                        SourceFileLocation: sdk.String("voluptatibus"),
                        Target: sdk.String("perferendis"),
                        TimeoutSeconds: sdk.Int64(855804),
                    },
                    DecryptStepDetails: &shared.DecryptStepDetails{
                        DestinationFileLocation: shared.InputFileLocation{
                            EfsFileLocation: &shared.EfsFileLocation{
                                FileSystemID: sdk.String("amet"),
                                Path: sdk.String("aut"),
                            },
                            S3FileLocation: &shared.S3InputFileLocation{
                                Bucket: sdk.String("cumque"),
                                Key: sdk.String("corporis"),
                            },
                        },
                        Name: sdk.String("Pete Rohan"),
                        OverwriteExisting: shared.OverwriteExistingEnumFalse.ToPointer(),
                        SourceFileLocation: sdk.String("dignissimos"),
                        Type: shared.EncryptionTypeEnumPgp,
                    },
                    DeleteStepDetails: &shared.DeleteStepDetails{
                        Name: sdk.String("Beatrice Dooley Sr."),
                        SourceFileLocation: sdk.String("minus"),
                    },
                    TagStepDetails: &shared.TagStepDetails{
                        Name: sdk.String("Rosa Swift"),
                        SourceFileLocation: sdk.String("recusandae"),
                        Tags: []shared.S3Tag{
                            shared.S3Tag{
                                Key: "facilis",
                                Value: "perspiciatis",
                            },
                            shared.S3Tag{
                                Key: "voluptatem",
                                Value: "porro",
                            },
                            shared.S3Tag{
                                Key: "consequuntur",
                                Value: "blanditiis",
                            },
                        },
                    },
                    Type: shared.WorkflowStepTypeEnumDelete.ToPointer(),
                },
            },
            Steps: []shared.WorkflowStep{
                shared.WorkflowStep{
                    CopyStepDetails: &shared.CopyStepDetails{
                        DestinationFileLocation: &shared.InputFileLocation{
                            EfsFileLocation: &shared.EfsFileLocation{
                                FileSystemID: sdk.String("occaecati"),
                                Path: sdk.String("rerum"),
                            },
                            S3FileLocation: &shared.S3InputFileLocation{
                                Bucket: sdk.String("adipisci"),
                                Key: sdk.String("asperiores"),
                            },
                        },
                        Name: sdk.String("Edwin Morar"),
                        OverwriteExisting: shared.OverwriteExistingEnumFalse.ToPointer(),
                        SourceFileLocation: sdk.String("provident"),
                    },
                    CustomStepDetails: &shared.CustomStepDetails{
                        Name: sdk.String("Randolph Wintheiser"),
                        SourceFileLocation: sdk.String("aliquid"),
                        Target: sdk.String("dolorem"),
                        TimeoutSeconds: sdk.Int64(209843),
                    },
                    DecryptStepDetails: &shared.DecryptStepDetails{
                        DestinationFileLocation: shared.InputFileLocation{
                            EfsFileLocation: &shared.EfsFileLocation{
                                FileSystemID: sdk.String("dolor"),
                                Path: sdk.String("qui"),
                            },
                            S3FileLocation: &shared.S3InputFileLocation{
                                Bucket: sdk.String("ipsum"),
                                Key: sdk.String("hic"),
                            },
                        },
                        Name: sdk.String("Felipe Klein"),
                        OverwriteExisting: shared.OverwriteExistingEnumTrue.ToPointer(),
                        SourceFileLocation: sdk.String("dolorum"),
                        Type: shared.EncryptionTypeEnumPgp,
                    },
                    DeleteStepDetails: &shared.DeleteStepDetails{
                        Name: sdk.String("Ms. Christine Beer"),
                        SourceFileLocation: sdk.String("quaerat"),
                    },
                    TagStepDetails: &shared.TagStepDetails{
                        Name: sdk.String("Rickey Wolf"),
                        SourceFileLocation: sdk.String("eos"),
                        Tags: []shared.S3Tag{
                            shared.S3Tag{
                                Key: "sit",
                                Value: "fugiat",
                            },
                            shared.S3Tag{
                                Key: "ab",
                                Value: "soluta",
                            },
                            shared.S3Tag{
                                Key: "dolorum",
                                Value: "iusto",
                            },
                        },
                    },
                    Type: shared.WorkflowStepTypeEnumTag.ToPointer(),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "deleniti",
                    Value: "omnis",
                },
                shared.Tag{
                    Key: "necessitatibus",
                    Value: "distinctio",
                },
                shared.Tag{
                    Key: "asperiores",
                    Value: "nihil",
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsum"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.CreateWorkflowXAmzTargetEnumTransferServiceCreateWorkflow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkflowResponse != nil {
        // handle response
    }
}
```

## DeleteAccess

Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.

### Example Usage

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
    res, err := s.SDK.DeleteAccess(ctx, operations.DeleteAccessRequest{
        DeleteAccessRequest: shared.DeleteAccessRequest{
            ExternalID: "amet",
            ServerID: "optio",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.DeleteAccessXAmzTargetEnumTransferServiceDeleteAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteAgreement

Delete the agreement that's specified in the provided <code>AgreementId</code>.

### Example Usage

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
    res, err := s.SDK.DeleteAgreement(ctx, operations.DeleteAgreementRequest{
        DeleteAgreementRequest: shared.DeleteAgreementRequest{
            AgreementID: "repellendus",
            ServerID: "totam",
        },
        XAmzAlgorithm: sdk.String("similique"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("quaerat"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.DeleteAgreementXAmzTargetEnumTransferServiceDeleteAgreement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteCertificate

Deletes the certificate that's specified in the <code>CertificateId</code> parameter.

### Example Usage

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
    res, err := s.SDK.DeleteCertificate(ctx, operations.DeleteCertificateRequest{
        DeleteCertificateRequest: shared.DeleteCertificateRequest{
            CertificateID: "officiis",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.DeleteCertificateXAmzTargetEnumTransferServiceDeleteCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteConnector

Deletes the agreement that's specified in the provided <code>ConnectorId</code>.

### Example Usage

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
    res, err := s.SDK.DeleteConnector(ctx, operations.DeleteConnectorRequest{
        DeleteConnectorRequest: shared.DeleteConnectorRequest{
            ConnectorID: "quisquam",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("enim"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        XAmzTarget: operations.DeleteConnectorXAmzTargetEnumTransferServiceDeleteConnector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteHostKey

Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.

### Example Usage

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
    res, err := s.SDK.DeleteHostKey(ctx, operations.DeleteHostKeyRequest{
        DeleteHostKeyRequest: shared.DeleteHostKeyRequest{
            HostKeyID: "sapiente",
            ServerID: "totam",
        },
        XAmzAlgorithm: sdk.String("nihil"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("expedita"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzTarget: operations.DeleteHostKeyXAmzTargetEnumTransferServiceDeleteHostKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteProfile

Deletes the profile that's specified in the <code>ProfileId</code> parameter.

### Example Usage

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
    res, err := s.SDK.DeleteProfile(ctx, operations.DeleteProfileRequest{
        DeleteProfileRequest: shared.DeleteProfileRequest{
            ProfileID: "voluptas",
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("quam"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("incidunt"),
        XAmzSecurityToken: sdk.String("qui"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("maxime"),
        XAmzTarget: operations.DeleteProfileXAmzTargetEnumTransferServiceDeleteProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteServer

<p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>

### Example Usage

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
    res, err := s.SDK.DeleteServer(ctx, operations.DeleteServerRequest{
        DeleteServerRequest: shared.DeleteServerRequest{
            ServerID: "pariatur",
        },
        XAmzAlgorithm: sdk.String("soluta"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.DeleteServerXAmzTargetEnumTransferServiceDeleteServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteSSHPublicKey

Deletes a user's Secure Shell (SSH) public key.

### Example Usage

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
    res, err := s.SDK.DeleteSSHPublicKey(ctx, operations.DeleteSSHPublicKeyRequest{
        DeleteSSHPublicKeyRequest: shared.DeleteSSHPublicKeyRequest{
            ServerID: "distinctio",
            SSHPublicKeyID: "facilis",
            UserName: "Grace_Kohler",
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.DeleteSSHPublicKeyXAmzTargetEnumTransferServiceDeleteSSHPublicKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteUser

<p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>

### Example Usage

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
    res, err := s.SDK.DeleteUser(ctx, operations.DeleteUserRequest{
        DeleteUserRequest: shared.DeleteUserRequest{
            ServerID: "nam",
            UserName: "Tristian_Bartell74",
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.DeleteUserXAmzTargetEnumTransferServiceDeleteUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteWorkflow

Deletes the specified workflow.

### Example Usage

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
    res, err := s.SDK.DeleteWorkflow(ctx, operations.DeleteWorkflowRequest{
        DeleteWorkflowRequest: shared.DeleteWorkflowRequest{
            WorkflowID: "cupiditate",
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("delectus"),
        XAmzCredential: sdk.String("dolorem"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("labore"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzTarget: operations.DeleteWorkflowXAmzTargetEnumTransferServiceDeleteWorkflow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DescribeAccess

<p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>

### Example Usage

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
    res, err := s.SDK.DescribeAccess(ctx, operations.DescribeAccessRequest{
        DescribeAccessRequest: shared.DescribeAccessRequest{
            ExternalID: "architecto",
            ServerID: "quae",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("est"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DescribeAccessXAmzTargetEnumTransferServiceDescribeAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAccessResponse != nil {
        // handle response
    }
}
```

## DescribeAgreement

Describes the agreement that's identified by the <code>AgreementId</code>.

### Example Usage

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
    res, err := s.SDK.DescribeAgreement(ctx, operations.DescribeAgreementRequest{
        DescribeAgreementRequest: shared.DescribeAgreementRequest{
            AgreementID: "doloribus",
            ServerID: "ut",
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("laudantium"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.DescribeAgreementXAmzTargetEnumTransferServiceDescribeAgreement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAgreementResponse != nil {
        // handle response
    }
}
```

## DescribeCertificate

Describes the certificate that's identified by the <code>CertificateId</code>.

### Example Usage

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
    res, err := s.SDK.DescribeCertificate(ctx, operations.DescribeCertificateRequest{
        DescribeCertificateRequest: shared.DescribeCertificateRequest{
            CertificateID: "voluptatibus",
        },
        XAmzAlgorithm: sdk.String("quisquam"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("delectus"),
        XAmzSignedHeaders: sdk.String("voluptate"),
        XAmzTarget: operations.DescribeCertificateXAmzTargetEnumTransferServiceDescribeCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCertificateResponse != nil {
        // handle response
    }
}
```

## DescribeConnector

Describes the connector that's identified by the <code>ConnectorId.</code> 

### Example Usage

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
    res, err := s.SDK.DescribeConnector(ctx, operations.DescribeConnectorRequest{
        DescribeConnectorRequest: shared.DescribeConnectorRequest{
            ConnectorID: "consectetur",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.DescribeConnectorXAmzTargetEnumTransferServiceDescribeConnector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeConnectorResponse != nil {
        // handle response
    }
}
```

## DescribeExecution

You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.

### Example Usage

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
    res, err := s.SDK.DescribeExecution(ctx, operations.DescribeExecutionRequest{
        DescribeExecutionRequest: shared.DescribeExecutionRequest{
            ExecutionID: "similique",
            WorkflowID: "facilis",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.DescribeExecutionXAmzTargetEnumTransferServiceDescribeExecution,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeExecutionResponse != nil {
        // handle response
    }
}
```

## DescribeHostKey

Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.

### Example Usage

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
    res, err := s.SDK.DescribeHostKey(ctx, operations.DescribeHostKeyRequest{
        DescribeHostKeyRequest: shared.DescribeHostKeyRequest{
            HostKeyID: "impedit",
            ServerID: "aut",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.DescribeHostKeyXAmzTargetEnumTransferServiceDescribeHostKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeHostKeyResponse != nil {
        // handle response
    }
}
```

## DescribeProfile

Returns the details of the profile that's specified by the <code>ProfileId</code>.

### Example Usage

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
    res, err := s.SDK.DescribeProfile(ctx, operations.DescribeProfileRequest{
        DescribeProfileRequest: shared.DescribeProfileRequest{
            ProfileID: "iusto",
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("tempora"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzTarget: operations.DescribeProfileXAmzTargetEnumTransferServiceDescribeProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeProfileResponse != nil {
        // handle response
    }
}
```

## DescribeSecurityPolicy

Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.

### Example Usage

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
    res, err := s.SDK.DescribeSecurityPolicy(ctx, operations.DescribeSecurityPolicyRequest{
        DescribeSecurityPolicyRequest: shared.DescribeSecurityPolicyRequest{
            SecurityPolicyName: "aspernatur",
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("ratione"),
        XAmzSecurityToken: sdk.String("ex"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("dicta"),
        XAmzTarget: operations.DescribeSecurityPolicyXAmzTargetEnumTransferServiceDescribeSecurityPolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeSecurityPolicyResponse != nil {
        // handle response
    }
}
```

## DescribeServer

<p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>

### Example Usage

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
    res, err := s.SDK.DescribeServer(ctx, operations.DescribeServerRequest{
        DescribeServerRequest: shared.DescribeServerRequest{
            ServerID: "dolor",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("voluptatibus"),
        XAmzSignedHeaders: sdk.String("nostrum"),
        XAmzTarget: operations.DescribeServerXAmzTargetEnumTransferServiceDescribeServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeServerResponse != nil {
        // handle response
    }
}
```

## DescribeUser

<p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>

### Example Usage

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
    res, err := s.SDK.DescribeUser(ctx, operations.DescribeUserRequest{
        DescribeUserRequest: shared.DescribeUserRequest{
            ServerID: "sapiente",
            UserName: "Pat_Ullrich",
        },
        XAmzAlgorithm: sdk.String("corporis"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.DescribeUserXAmzTargetEnumTransferServiceDescribeUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeUserResponse != nil {
        // handle response
    }
}
```

## DescribeWorkflow

Describes the specified workflow.

### Example Usage

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
    res, err := s.SDK.DescribeWorkflow(ctx, operations.DescribeWorkflowRequest{
        DescribeWorkflowRequest: shared.DescribeWorkflowRequest{
            WorkflowID: "consectetur",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.DescribeWorkflowXAmzTargetEnumTransferServiceDescribeWorkflow,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeWorkflowResponse != nil {
        // handle response
    }
}
```

## ImportCertificate

Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ImportCertificate(ctx, operations.ImportCertificateRequest{
        ImportCertificateRequest: shared.ImportCertificateRequest{
            ActiveDate: types.MustTimeFromString("2022-06-20T06:50:25.967Z"),
            Certificate: "impedit",
            CertificateChain: sdk.String("aliquam"),
            Description: sdk.String("fugit"),
            InactiveDate: types.MustTimeFromString("2022-10-05T22:09:33.495Z"),
            PrivateKey: sdk.String("non"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "dolorum",
                    Value: "laborum",
                },
            },
            Usage: shared.CertificateUsageTypeEnumEncryption,
        },
        XAmzAlgorithm: sdk.String("velit"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("assumenda"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzTarget: operations.ImportCertificateXAmzTargetEnumTransferServiceImportCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportCertificateResponse != nil {
        // handle response
    }
}
```

## ImportHostKey

Adds a host key to the server that's specified by the <code>ServerId</code> parameter.

### Example Usage

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
    res, err := s.SDK.ImportHostKey(ctx, operations.ImportHostKeyRequest{
        ImportHostKeyRequest: shared.ImportHostKeyRequest{
            Description: sdk.String("voluptas"),
            HostKeyBody: "libero",
            ServerID: "quasi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "numquam",
                    Value: "explicabo",
                },
                shared.Tag{
                    Key: "provident",
                    Value: "ipsa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("rem"),
        XAmzTarget: operations.ImportHostKeyXAmzTargetEnumTransferServiceImportHostKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportHostKeyResponse != nil {
        // handle response
    }
}
```

## ImportSSHPublicKey

<p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>

### Example Usage

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
    res, err := s.SDK.ImportSSHPublicKey(ctx, operations.ImportSSHPublicKeyRequest{
        ImportSSHPublicKeyRequest: shared.ImportSSHPublicKeyRequest{
            ServerID: "fuga",
            SSHPublicKeyBody: "reprehenderit",
            UserName: "Maurice43",
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("assumenda"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("quisquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        XAmzTarget: operations.ImportSSHPublicKeyXAmzTargetEnumTransferServiceImportSSHPublicKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportSSHPublicKeyResponse != nil {
        // handle response
    }
}
```

## ListAccesses

Lists the details for all the accesses you have on your server.

### Example Usage

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
    res, err := s.SDK.ListAccesses(ctx, operations.ListAccessesRequest{
        ListAccessesRequest: shared.ListAccessesRequest{
            MaxResults: sdk.Int64(660040),
            NextToken: sdk.String("quidem"),
            ServerID: "neque",
        },
        MaxResults: sdk.String("quo"),
        NextToken: sdk.String("illum"),
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("fuga"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("eos"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        XAmzTarget: operations.ListAccessesXAmzTargetEnumTransferServiceListAccesses,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccessesResponse != nil {
        // handle response
    }
}
```

## ListAgreements

Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.

### Example Usage

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
    res, err := s.SDK.ListAgreements(ctx, operations.ListAgreementsRequest{
        ListAgreementsRequest: shared.ListAgreementsRequest{
            MaxResults: sdk.Int64(9688),
            NextToken: sdk.String("tempora"),
            ServerID: "debitis",
        },
        MaxResults: sdk.String("ipsam"),
        NextToken: sdk.String("aspernatur"),
        XAmzAlgorithm: sdk.String("sequi"),
        XAmzContentSha256: sdk.String("quo"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.ListAgreementsXAmzTargetEnumTransferServiceListAgreements,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAgreementsResponse != nil {
        // handle response
    }
}
```

## ListCertificates

Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.

### Example Usage

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
    res, err := s.SDK.ListCertificates(ctx, operations.ListCertificatesRequest{
        ListCertificatesRequest: shared.ListCertificatesRequest{
            MaxResults: sdk.Int64(490819),
            NextToken: sdk.String("inventore"),
        },
        MaxResults: sdk.String("nihil"),
        NextToken: sdk.String("totam"),
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("odio"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("dolores"),
        XAmzTarget: operations.ListCertificatesXAmzTargetEnumTransferServiceListCertificates,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCertificatesResponse != nil {
        // handle response
    }
}
```

## ListConnectors

Lists the connectors for the specified Region.

### Example Usage

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
    res, err := s.SDK.ListConnectors(ctx, operations.ListConnectorsRequest{
        ListConnectorsRequest: shared.ListConnectorsRequest{
            MaxResults: sdk.Int64(645570),
            NextToken: sdk.String("molestiae"),
        },
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("porro"),
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("fuga"),
        XAmzTarget: operations.ListConnectorsXAmzTargetEnumTransferServiceListConnectors,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListConnectorsResponse != nil {
        // handle response
    }
}
```

## ListExecutions

Lists all executions for the specified workflow.

### Example Usage

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
    res, err := s.SDK.ListExecutions(ctx, operations.ListExecutionsRequest{
        ListExecutionsRequest: shared.ListExecutionsRequest{
            MaxResults: sdk.Int64(649463),
            NextToken: sdk.String("incidunt"),
            WorkflowID: "atque",
        },
        MaxResults: sdk.String("explicabo"),
        NextToken: sdk.String("minima"),
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("ratione"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("saepe"),
        XAmzTarget: operations.ListExecutionsXAmzTargetEnumTransferServiceListExecutions,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListExecutionsResponse != nil {
        // handle response
    }
}
```

## ListHostKeys

Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.

### Example Usage

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
    res, err := s.SDK.ListHostKeys(ctx, operations.ListHostKeysRequest{
        ListHostKeysRequest: shared.ListHostKeysRequest{
            MaxResults: sdk.Int64(578922),
            NextToken: sdk.String("atque"),
            ServerID: "et",
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("eveniet"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.ListHostKeysXAmzTargetEnumTransferServiceListHostKeys,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListHostKeysResponse != nil {
        // handle response
    }
}
```

## ListProfiles

Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.

### Example Usage

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
    res, err := s.SDK.ListProfiles(ctx, operations.ListProfilesRequest{
        ListProfilesRequest: shared.ListProfilesRequest{
            MaxResults: sdk.Int64(877131),
            NextToken: sdk.String("aliquid"),
            ProfileType: shared.ProfileTypeEnumLocal.ToPointer(),
        },
        MaxResults: sdk.String("saepe"),
        NextToken: sdk.String("vel"),
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("minima"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzTarget: operations.ListProfilesXAmzTargetEnumTransferServiceListProfiles,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProfilesResponse != nil {
        // handle response
    }
}
```

## ListSecurityPolicies

Lists the security policies that are attached to your file transfer protocol-enabled servers.

### Example Usage

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
    res, err := s.SDK.ListSecurityPolicies(ctx, operations.ListSecurityPoliciesRequest{
        ListSecurityPoliciesRequest: shared.ListSecurityPoliciesRequest{
            MaxResults: sdk.Int64(27069),
            NextToken: sdk.String("culpa"),
        },
        MaxResults: sdk.String("tempore"),
        NextToken: sdk.String("adipisci"),
        XAmzAlgorithm: sdk.String("cumque"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzTarget: operations.ListSecurityPoliciesXAmzTargetEnumTransferServiceListSecurityPolicies,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSecurityPoliciesResponse != nil {
        // handle response
    }
}
```

## ListServers

Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.

### Example Usage

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
    res, err := s.SDK.ListServers(ctx, operations.ListServersRequest{
        ListServersRequest: shared.ListServersRequest{
            MaxResults: sdk.Int64(458139),
            NextToken: sdk.String("blanditiis"),
        },
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("a"),
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("esse"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("sint"),
        XAmzTarget: operations.ListServersXAmzTargetEnumTransferServiceListServers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListServersResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ListTagsForResourceRequest: shared.ListTagsForResourceRequest{
            Arn: "pariatur",
            MaxResults: sdk.Int64(820767),
            NextToken: sdk.String("quia"),
        },
        MaxResults: sdk.String("eveniet"),
        NextToken: sdk.String("asperiores"),
        XAmzAlgorithm: sdk.String("facere"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzTarget: operations.ListTagsForResourceXAmzTargetEnumTransferServiceListTagsForResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListUsers

Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.

### Example Usage

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
    res, err := s.SDK.ListUsers(ctx, operations.ListUsersRequest{
        ListUsersRequest: shared.ListUsersRequest{
            MaxResults: sdk.Int64(949298),
            NextToken: sdk.String("quae"),
            ServerID: "earum",
        },
        MaxResults: sdk.String("vel"),
        NextToken: sdk.String("in"),
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        XAmzTarget: operations.ListUsersXAmzTargetEnumTransferServiceListUsers,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUsersResponse != nil {
        // handle response
    }
}
```

## ListWorkflows

Lists all of your workflows.

### Example Usage

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
    res, err := s.SDK.ListWorkflows(ctx, operations.ListWorkflowsRequest{
        ListWorkflowsRequest: shared.ListWorkflowsRequest{
            MaxResults: sdk.Int64(119771),
            NextToken: sdk.String("ullam"),
        },
        MaxResults: sdk.String("reprehenderit"),
        NextToken: sdk.String("ullam"),
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.ListWorkflowsXAmzTargetEnumTransferServiceListWorkflows,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkflowsResponse != nil {
        // handle response
    }
}
```

## SendWorkflowStepState

<p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>

### Example Usage

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
    res, err := s.SDK.SendWorkflowStepState(ctx, operations.SendWorkflowStepStateRequest{
        SendWorkflowStepStateRequest: shared.SendWorkflowStepStateRequest{
            ExecutionID: "itaque",
            Status: shared.CustomStepStatusEnumFailure,
            Token: "architecto",
            WorkflowID: "omnis",
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("voluptate"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzTarget: operations.SendWorkflowStepStateXAmzTargetEnumTransferServiceSendWorkflowStepState,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SendWorkflowStepStateResponse != nil {
        // handle response
    }
}
```

## StartFileTransfer

Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 

### Example Usage

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
    res, err := s.SDK.StartFileTransfer(ctx, operations.StartFileTransferRequest{
        StartFileTransferRequest: shared.StartFileTransferRequest{
            ConnectorID: "veritatis",
            SendFilePaths: []string{
                "adipisci",
            },
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.StartFileTransferXAmzTargetEnumTransferServiceStartFileTransfer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartFileTransferResponse != nil {
        // handle response
    }
}
```

## StartServer

<p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>

### Example Usage

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
    res, err := s.SDK.StartServer(ctx, operations.StartServerRequest{
        StartServerRequest: shared.StartServerRequest{
            ServerID: "mollitia",
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzTarget: operations.StartServerXAmzTargetEnumTransferServiceStartServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## StopServer

<p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>

### Example Usage

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
    res, err := s.SDK.StopServer(ctx, operations.StopServerRequest{
        StopServerRequest: shared.StopServerRequest{
            ServerID: "impedit",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("natus"),
        XAmzTarget: operations.StopServerXAmzTargetEnumTransferServiceStopServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TagResource

<p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        TagResourceRequest: shared.TagResourceRequest{
            Arn: "velit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "voluptas",
                    Value: "asperiores",
                },
                shared.Tag{
                    Key: "aperiam",
                    Value: "ea",
                },
                shared.Tag{
                    Key: "quaerat",
                    Value: "consequuntur",
                },
                shared.Tag{
                    Key: "repellendus",
                    Value: "officia",
                },
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("quae"),
        XAmzSignedHeaders: sdk.String("quaerat"),
        XAmzTarget: operations.TagResourceXAmzTargetEnumTransferServiceTagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TestIdentityProvider

<p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>

### Example Usage

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
    res, err := s.SDK.TestIdentityProvider(ctx, operations.TestIdentityProviderRequest{
        TestIdentityProviderRequest: shared.TestIdentityProviderRequest{
            ServerID: "porro",
            ServerProtocol: shared.ProtocolEnumAs2.ToPointer(),
            SourceIP: sdk.String("labore"),
            UserName: "Antoinette_Flatley38",
            UserPassword: sdk.String("velit"),
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzTarget: operations.TestIdentityProviderXAmzTargetEnumTransferServiceTestIdentityProvider,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TestIdentityProviderResponse != nil {
        // handle response
    }
}
```

## UntagResource

<p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        UntagResourceRequest: shared.UntagResourceRequest{
            Arn: "quos",
            TagKeys: []string{
                "labore",
                "possimus",
            },
        },
        XAmzAlgorithm: sdk.String("facilis"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("in"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzTarget: operations.UntagResourceXAmzTargetEnumTransferServiceUntagResource,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateAccess

Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.

### Example Usage

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
    res, err := s.SDK.UpdateAccess(ctx, operations.UpdateAccessRequest{
        UpdateAccessRequest: shared.UpdateAccessRequest{
            ExternalID: "nemo",
            HomeDirectory: sdk.String("recusandae"),
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "aperiam",
                    Target: "cum",
                },
                shared.HomeDirectoryMapEntry{
                    Entry: "consectetur",
                    Target: "in",
                },
            },
            HomeDirectoryType: shared.HomeDirectoryTypeEnumPath.ToPointer(),
            Policy: sdk.String("earum"),
            PosixProfile: &shared.PosixProfile{
                Gid: 814967,
                SecondaryGids: []int64{
                    985492,
                    381760,
                },
                UID: 968972,
            },
            Role: sdk.String("quidem"),
            ServerID: "saepe",
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("sunt"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.UpdateAccessXAmzTargetEnumTransferServiceUpdateAccess,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAccessResponse != nil {
        // handle response
    }
}
```

## UpdateAgreement

Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.

### Example Usage

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
    res, err := s.SDK.UpdateAgreement(ctx, operations.UpdateAgreementRequest{
        UpdateAgreementRequest: shared.UpdateAgreementRequest{
            AccessRole: sdk.String("beatae"),
            AgreementID: "dignissimos",
            BaseDirectory: sdk.String("a"),
            Description: sdk.String("debitis"),
            LocalProfileID: sdk.String("consectetur"),
            PartnerProfileID: sdk.String("corporis"),
            ServerID: "harum",
            Status: shared.AgreementStatusTypeEnumActive.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("voluptates"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("tempora"),
        XAmzTarget: operations.UpdateAgreementXAmzTargetEnumTransferServiceUpdateAgreement,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateAgreementResponse != nil {
        // handle response
    }
}
```

## UpdateCertificate

Updates the active and inactive dates for a certificate.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCertificate(ctx, operations.UpdateCertificateRequest{
        UpdateCertificateRequest: shared.UpdateCertificateRequest{
            ActiveDate: types.MustTimeFromString("2022-08-15T15:27:41.112Z"),
            CertificateID: "voluptas",
            Description: sdk.String("voluptas"),
            InactiveDate: types.MustTimeFromString("2022-04-02T16:36:53.419Z"),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("dolores"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.UpdateCertificateXAmzTargetEnumTransferServiceUpdateCertificate,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCertificateResponse != nil {
        // handle response
    }
}
```

## UpdateConnector

Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.

### Example Usage

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
    res, err := s.SDK.UpdateConnector(ctx, operations.UpdateConnectorRequest{
        UpdateConnectorRequest: shared.UpdateConnectorRequest{
            AccessRole: sdk.String("aliquam"),
            As2Config: &shared.As2ConnectorConfig{
                Compression: shared.CompressionEnumEnumDisabled.ToPointer(),
                EncryptionAlgorithm: shared.EncryptionAlgEnumNone.ToPointer(),
                LocalProfileID: sdk.String("ullam"),
                MdnResponse: shared.MdnResponseEnumSync.ToPointer(),
                MdnSigningAlgorithm: shared.MdnSigningAlgEnumNone.ToPointer(),
                MessageSubject: sdk.String("blanditiis"),
                PartnerProfileID: sdk.String("quas"),
                SigningAlgorithm: shared.SigningAlgEnumNone.ToPointer(),
            },
            ConnectorID: "nesciunt",
            LoggingRole: sdk.String("culpa"),
            URL: sdk.String("corrupti"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzTarget: operations.UpdateConnectorXAmzTargetEnumTransferServiceUpdateConnector,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateConnectorResponse != nil {
        // handle response
    }
}
```

## UpdateHostKey

Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.

### Example Usage

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
    res, err := s.SDK.UpdateHostKey(ctx, operations.UpdateHostKeyRequest{
        UpdateHostKeyRequest: shared.UpdateHostKeyRequest{
            Description: "sed",
            HostKeyID: "reiciendis",
            ServerID: "explicabo",
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("voluptate"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzTarget: operations.UpdateHostKeyXAmzTargetEnumTransferServiceUpdateHostKey,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateHostKeyResponse != nil {
        // handle response
    }
}
```

## UpdateProfile

Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.

### Example Usage

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
    res, err := s.SDK.UpdateProfile(ctx, operations.UpdateProfileRequest{
        UpdateProfileRequest: shared.UpdateProfileRequest{
            CertificateIds: []string{
                "sed",
                "in",
                "commodi",
            },
            ProfileID: "quidem",
        },
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.UpdateProfileXAmzTargetEnumTransferServiceUpdateProfile,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProfileResponse != nil {
        // handle response
    }
}
```

## UpdateServer

<p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>

### Example Usage

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
    res, err := s.SDK.UpdateServer(ctx, operations.UpdateServerRequest{
        UpdateServerRequest: shared.UpdateServerRequest{
            Certificate: sdk.String("illo"),
            EndpointDetails: &shared.EndpointDetails{
                AddressAllocationIds: []string{
                    "perferendis",
                    "corrupti",
                    "maiores",
                    "incidunt",
                },
                SecurityGroupIds: []string{
                    "provident",
                },
                SubnetIds: []string{
                    "necessitatibus",
                    "ipsum",
                },
                VpcEndpointID: sdk.String("ea"),
                VpcID: sdk.String("occaecati"),
            },
            EndpointType: shared.EndpointTypeEnumVpc.ToPointer(),
            HostKey: sdk.String("voluptatibus"),
            IdentityProviderDetails: &shared.IdentityProviderDetails{
                DirectoryID: sdk.String("tempora"),
                Function: sdk.String("tempora"),
                InvocationRole: sdk.String("voluptate"),
                URL: sdk.String("reiciendis"),
            },
            LoggingRole: sdk.String("ex"),
            PostAuthenticationLoginBanner: sdk.String("sit"),
            PreAuthenticationLoginBanner: sdk.String("non"),
            ProtocolDetails: &shared.ProtocolDetails{
                As2Transports: []shared.As2TransportEnum{
                    shared.As2TransportEnumHTTP,
                    shared.As2TransportEnumHTTP,
                    shared.As2TransportEnumHTTP,
                    shared.As2TransportEnumHTTP,
                },
                PassiveIP: sdk.String("praesentium"),
                SetStatOption: shared.SetStatOptionEnumEnableNoOp.ToPointer(),
                TLSSessionResumptionMode: shared.TLSSessionResumptionModeEnumDisabled.ToPointer(),
            },
            Protocols: []shared.ProtocolEnum{
                shared.ProtocolEnumFtp,
                shared.ProtocolEnumAs2,
            },
            SecurityPolicyName: sdk.String("rem"),
            ServerID: "sit",
            WorkflowDetails: &shared.WorkflowDetails{
                OnPartialUpload: []shared.WorkflowDetail{
                    shared.WorkflowDetail{
                        ExecutionRole: "error",
                        WorkflowID: "veniam",
                    },
                    shared.WorkflowDetail{
                        ExecutionRole: "minima",
                        WorkflowID: "recusandae",
                    },
                    shared.WorkflowDetail{
                        ExecutionRole: "reiciendis",
                        WorkflowID: "nulla",
                    },
                    shared.WorkflowDetail{
                        ExecutionRole: "magni",
                        WorkflowID: "aperiam",
                    },
                },
                OnUpload: []shared.WorkflowDetail{
                    shared.WorkflowDetail{
                        ExecutionRole: "numquam",
                        WorkflowID: "veniam",
                    },
                    shared.WorkflowDetail{
                        ExecutionRole: "in",
                        WorkflowID: "officiis",
                    },
                    shared.WorkflowDetail{
                        ExecutionRole: "beatae",
                        WorkflowID: "laudantium",
                    },
                    shared.WorkflowDetail{
                        ExecutionRole: "exercitationem",
                        WorkflowID: "praesentium",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("voluptatum"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzTarget: operations.UpdateServerXAmzTargetEnumTransferServiceUpdateServer,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateServerResponse != nil {
        // handle response
    }
}
```

## UpdateUser

<p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>

### Example Usage

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
    res, err := s.SDK.UpdateUser(ctx, operations.UpdateUserRequest{
        UpdateUserRequest: shared.UpdateUserRequest{
            HomeDirectory: sdk.String("debitis"),
            HomeDirectoryMappings: []shared.HomeDirectoryMapEntry{
                shared.HomeDirectoryMapEntry{
                    Entry: "dolorum",
                    Target: "nostrum",
                },
            },
            HomeDirectoryType: shared.HomeDirectoryTypeEnumLogical.ToPointer(),
            Policy: sdk.String("dolorum"),
            PosixProfile: &shared.PosixProfile{
                Gid: 548361,
                SecondaryGids: []int64{
                    272683,
                    543678,
                    148268,
                    282699,
                },
                UID: 856303,
            },
            Role: sdk.String("voluptatem"),
            ServerID: "culpa",
            UserName: "Mercedes46",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("sit"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("repudiandae"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("et"),
        XAmzTarget: operations.UpdateUserXAmzTargetEnumTransferServiceUpdateUser,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateUserResponse != nil {
        // handle response
    }
}
```
