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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryMapEntry;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixProfile;
use \OpenAPI\OpenAPI\Models\Operations\CreateAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessRequest();
    $request->createAccessRequest = new CreateAccessRequest();
    $request->createAccessRequest->externalId = 'minus';
    $request->createAccessRequest->homeDirectory = 'placeat';
    $request->createAccessRequest->homeDirectoryMappings = [
        new HomeDirectoryMapEntry(),
        new HomeDirectoryMapEntry(),
        new HomeDirectoryMapEntry(),
    ];
    $request->createAccessRequest->homeDirectoryType = HomeDirectoryTypeEnum::PATH;
    $request->createAccessRequest->policy = 'excepturi';
    $request->createAccessRequest->posixProfile = new PosixProfile();
    $request->createAccessRequest->posixProfile->gid = 392785;
    $request->createAccessRequest->posixProfile->secondaryGids = [
        836079,
        71036,
        337396,
        87129,
    ];
    $request->createAccessRequest->posixProfile->uid = 648172;
    $request->createAccessRequest->role = 'perferendis';
    $request->createAccessRequest->serverId = 'ipsam';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzTarget = CreateAccessXAmzTargetEnum::TRANSFER_SERVICE_CREATE_ACCESS;

    $response = $sdk->sdk->createAccess($request);

    if ($response->createAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAgreement

<p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateAgreementRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAgreementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AgreementStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateAgreementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAgreementRequest();
    $request->createAgreementRequest = new CreateAgreementRequest();
    $request->createAgreementRequest->accessRole = 'molestiae';
    $request->createAgreementRequest->baseDirectory = 'quod';
    $request->createAgreementRequest->description = 'quod';
    $request->createAgreementRequest->localProfileId = 'esse';
    $request->createAgreementRequest->partnerProfileId = 'totam';
    $request->createAgreementRequest->serverId = 'porro';
    $request->createAgreementRequest->status = AgreementStatusTypeEnum::INACTIVE;
    $request->createAgreementRequest->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'officia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'optio';
    $request->xAmzTarget = CreateAgreementXAmzTargetEnum::TRANSFER_SERVICE_CREATE_AGREEMENT;

    $response = $sdk->sdk->createAgreement($request);

    if ($response->createAgreementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createConnector

Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\As2ConnectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\CompressionEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionAlgEnum;
use \OpenAPI\OpenAPI\Models\Shared\MdnResponseEnum;
use \OpenAPI\OpenAPI\Models\Shared\MdnSigningAlgEnum;
use \OpenAPI\OpenAPI\Models\Shared\SigningAlgEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateConnectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateConnectorRequest();
    $request->createConnectorRequest = new CreateConnectorRequest();
    $request->createConnectorRequest->accessRole = 'totam';
    $request->createConnectorRequest->as2Config = new As2ConnectorConfig();
    $request->createConnectorRequest->as2Config->compression = CompressionEnumEnum::ZLIB;
    $request->createConnectorRequest->as2Config->encryptionAlgorithm = EncryptionAlgEnum::AES192_CBC;
    $request->createConnectorRequest->as2Config->localProfileId = 'molestiae';
    $request->createConnectorRequest->as2Config->mdnResponse = MdnResponseEnum::SYNC;
    $request->createConnectorRequest->as2Config->mdnSigningAlgorithm = MdnSigningAlgEnum::SHA384;
    $request->createConnectorRequest->as2Config->messageSubject = 'impedit';
    $request->createConnectorRequest->as2Config->partnerProfileId = 'cum';
    $request->createConnectorRequest->as2Config->signingAlgorithm = SigningAlgEnum::SHA512;
    $request->createConnectorRequest->loggingRole = 'ipsum';
    $request->createConnectorRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createConnectorRequest->url = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = CreateConnectorXAmzTargetEnum::TRANSFER_SERVICE_CREATE_CONNECTOR;

    $response = $sdk->sdk->createConnector($request);

    if ($response->createConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProfile

Creates the local or partner profile to use for AS2 transfers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProfileRequest();
    $request->createProfileRequest = new CreateProfileRequest();
    $request->createProfileRequest->as2Id = 'laboriosam';
    $request->createProfileRequest->certificateIds = [
        'saepe',
        'fuga',
        'in',
        'corporis',
    ];
    $request->createProfileRequest->profileType = ProfileTypeEnum::PARTNER;
    $request->createProfileRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzTarget = CreateProfileXAmzTargetEnum::TRANSFER_SERVICE_CREATE_PROFILE;

    $response = $sdk->sdk->createProfile($request);

    if ($response->createProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createServer

Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\EndpointDetails;
use \OpenAPI\OpenAPI\Models\Shared\EndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IdentityProviderDetails;
use \OpenAPI\OpenAPI\Models\Shared\IdentityProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolDetails;
use \OpenAPI\OpenAPI\Models\Shared\As2TransportEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetStatOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsSessionResumptionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowDetails;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowDetail;
use \OpenAPI\OpenAPI\Models\Operations\CreateServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateServerRequest();
    $request->createServerRequest = new CreateServerRequest();
    $request->createServerRequest->certificate = 'laborum';
    $request->createServerRequest->domain = DomainEnum::S3;
    $request->createServerRequest->endpointDetails = new EndpointDetails();
    $request->createServerRequest->endpointDetails->addressAllocationIds = [
        'corporis',
    ];
    $request->createServerRequest->endpointDetails->securityGroupIds = [
        'nobis',
    ];
    $request->createServerRequest->endpointDetails->subnetIds = [
        'omnis',
        'nemo',
    ];
    $request->createServerRequest->endpointDetails->vpcEndpointId = 'minima';
    $request->createServerRequest->endpointDetails->vpcId = 'excepturi';
    $request->createServerRequest->endpointType = EndpointTypeEnum::PUBLIC;
    $request->createServerRequest->hostKey = 'iure';
    $request->createServerRequest->identityProviderDetails = new IdentityProviderDetails();
    $request->createServerRequest->identityProviderDetails->directoryId = 'culpa';
    $request->createServerRequest->identityProviderDetails->function = 'doloribus';
    $request->createServerRequest->identityProviderDetails->invocationRole = 'sapiente';
    $request->createServerRequest->identityProviderDetails->url = 'architecto';
    $request->createServerRequest->identityProviderType = IdentityProviderTypeEnum::AWS_DIRECTORY_SERVICE;
    $request->createServerRequest->loggingRole = 'dolorem';
    $request->createServerRequest->postAuthenticationLoginBanner = 'culpa';
    $request->createServerRequest->preAuthenticationLoginBanner = 'consequuntur';
    $request->createServerRequest->protocolDetails = new ProtocolDetails();
    $request->createServerRequest->protocolDetails->as2Transports = [
        As2TransportEnum::HTTP,
        As2TransportEnum::HTTP,
        As2TransportEnum::HTTP,
        As2TransportEnum::HTTP,
    ];
    $request->createServerRequest->protocolDetails->passiveIp = 'mollitia';
    $request->createServerRequest->protocolDetails->setStatOption = SetStatOptionEnum::ENABLE_NO_OP;
    $request->createServerRequest->protocolDetails->tlsSessionResumptionMode = TlsSessionResumptionModeEnum::DISABLED;
    $request->createServerRequest->protocols = [
        ProtocolEnum::FTP,
        ProtocolEnum::FTP,
    ];
    $request->createServerRequest->securityPolicyName = 'velit';
    $request->createServerRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createServerRequest->workflowDetails = new WorkflowDetails();
    $request->createServerRequest->workflowDetails->onPartialUpload = [
        new WorkflowDetail(),
    ];
    $request->createServerRequest->workflowDetails->onUpload = [
        new WorkflowDetail(),
        new WorkflowDetail(),
    ];
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = CreateServerXAmzTargetEnum::TRANSFER_SERVICE_CREATE_SERVER;

    $response = $sdk->sdk->createServer($request);

    if ($response->createServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUser

Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryMapEntry;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixProfile;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserRequest();
    $request->createUserRequest = new CreateUserRequest();
    $request->createUserRequest->homeDirectory = 'tenetur';
    $request->createUserRequest->homeDirectoryMappings = [
        new HomeDirectoryMapEntry(),
        new HomeDirectoryMapEntry(),
    ];
    $request->createUserRequest->homeDirectoryType = HomeDirectoryTypeEnum::LOGICAL;
    $request->createUserRequest->policy = 'possimus';
    $request->createUserRequest->posixProfile = new PosixProfile();
    $request->createUserRequest->posixProfile->gid = 13571;
    $request->createUserRequest->posixProfile->secondaryGids = [
        622846,
    ];
    $request->createUserRequest->posixProfile->uid = 837945;
    $request->createUserRequest->role = 'laborum';
    $request->createUserRequest->serverId = 'quasi';
    $request->createUserRequest->sshPublicKeyBody = 'reiciendis';
    $request->createUserRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createUserRequest->userName = 'Shad_Koss';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = CreateUserXAmzTargetEnum::TRANSFER_SERVICE_CREATE_USER;

    $response = $sdk->sdk->createUser($request);

    if ($response->createUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWorkflow

 Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStep;
use \OpenAPI\OpenAPI\Models\Shared\CopyStepDetails;
use \OpenAPI\OpenAPI\Models\Shared\InputFileLocation;
use \OpenAPI\OpenAPI\Models\Shared\EfsFileLocation;
use \OpenAPI\OpenAPI\Models\Shared\S3InputFileLocation;
use \OpenAPI\OpenAPI\Models\Shared\OverwriteExistingEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomStepDetails;
use \OpenAPI\OpenAPI\Models\Shared\DecryptStepDetails;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeleteStepDetails;
use \OpenAPI\OpenAPI\Models\Shared\TagStepDetails;
use \OpenAPI\OpenAPI\Models\Shared\S3Tag;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowStepTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateWorkflowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWorkflowRequest();
    $request->createWorkflowRequest = new CreateWorkflowRequest();
    $request->createWorkflowRequest->description = 'ut';
    $request->createWorkflowRequest->onExceptionSteps = [
        new WorkflowStep(),
        new WorkflowStep(),
        new WorkflowStep(),
        new WorkflowStep(),
    ];
    $request->createWorkflowRequest->steps = [
        new WorkflowStep(),
    ];
    $request->createWorkflowRequest->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = CreateWorkflowXAmzTargetEnum::TRANSFER_SERVICE_CREATE_WORKFLOW;

    $response = $sdk->sdk->createWorkflow($request);

    if ($response->createWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccess

Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccessRequest();
    $request->deleteAccessRequest = new DeleteAccessRequest();
    $request->deleteAccessRequest->externalId = 'repudiandae';
    $request->deleteAccessRequest->serverId = 'quae';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'molestias';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->xAmzTarget = DeleteAccessXAmzTargetEnum::TRANSFER_SERVICE_DELETE_ACCESS;

    $response = $sdk->sdk->deleteAccess($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAgreement

Delete the agreement that's specified in the provided <code>AgreementId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAgreementRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAgreementRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAgreementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAgreementRequest();
    $request->deleteAgreementRequest = new DeleteAgreementRequest();
    $request->deleteAgreementRequest->agreementId = 'rem';
    $request->deleteAgreementRequest->serverId = 'voluptates';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = DeleteAgreementXAmzTargetEnum::TRANSFER_SERVICE_DELETE_AGREEMENT;

    $response = $sdk->sdk->deleteAgreement($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCertificate

Deletes the certificate that's specified in the <code>CertificateId</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCertificateRequest();
    $request->deleteCertificateRequest = new DeleteCertificateRequest();
    $request->deleteCertificateRequest->certificateId = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DeleteCertificateXAmzTargetEnum::TRANSFER_SERVICE_DELETE_CERTIFICATE;

    $response = $sdk->sdk->deleteCertificate($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteConnector

Deletes the agreement that's specified in the provided <code>ConnectorId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteConnectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteConnectorRequest();
    $request->deleteConnectorRequest = new DeleteConnectorRequest();
    $request->deleteConnectorRequest->connectorId = 'modi';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'cupiditate';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'assumenda';
    $request->xAmzTarget = DeleteConnectorXAmzTargetEnum::TRANSFER_SERVICE_DELETE_CONNECTOR;

    $response = $sdk->sdk->deleteConnector($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHostKey

Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHostKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteHostKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHostKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHostKeyRequest();
    $request->deleteHostKeyRequest = new DeleteHostKeyRequest();
    $request->deleteHostKeyRequest->hostKeyId = 'ipsam';
    $request->deleteHostKeyRequest->serverId = 'alias';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'facilis';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = DeleteHostKeyXAmzTargetEnum::TRANSFER_SERVICE_DELETE_HOST_KEY;

    $response = $sdk->sdk->deleteHostKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProfile

Deletes the profile that's specified in the <code>ProfileId</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProfileRequest();
    $request->deleteProfileRequest = new DeleteProfileRequest();
    $request->deleteProfileRequest->profileId = 'delectus';
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'eligendi';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = DeleteProfileXAmzTargetEnum::TRANSFER_SERVICE_DELETE_PROFILE;

    $response = $sdk->sdk->deleteProfile($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteServer

<p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteServerRequest();
    $request->deleteServerRequest = new DeleteServerRequest();
    $request->deleteServerRequest->serverId = 'sint';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'debitis';
    $request->xAmzDate = 'a';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'in';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = DeleteServerXAmzTargetEnum::TRANSFER_SERVICE_DELETE_SERVER;

    $response = $sdk->sdk->deleteServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSshPublicKey

Deletes a user's Secure Shell (SSH) public key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSshPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSshPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSshPublicKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSshPublicKeyRequest();
    $request->deleteSshPublicKeyRequest = new DeleteSshPublicKeyRequest();
    $request->deleteSshPublicKeyRequest->serverId = 'illum';
    $request->deleteSshPublicKeyRequest->sshPublicKeyId = 'maiores';
    $request->deleteSshPublicKeyRequest->userName = 'Maximo76';
    $request->xAmzAlgorithm = 'facere';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->xAmzTarget = DeleteSshPublicKeyXAmzTargetEnum::TRANSFER_SERVICE_DELETE_SSH_PUBLIC_KEY;

    $response = $sdk->sdk->deleteSshPublicKey($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUser

<p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserRequest();
    $request->deleteUserRequest = new DeleteUserRequest();
    $request->deleteUserRequest->serverId = 'enim';
    $request->deleteUserRequest->userName = 'Shannon_Wintheiser72';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'nisi';
    $request->xAmzTarget = DeleteUserXAmzTargetEnum::TRANSFER_SERVICE_DELETE_USER;

    $response = $sdk->sdk->deleteUser($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWorkflow

Deletes the specified workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWorkflowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWorkflowRequest();
    $request->deleteWorkflowRequest = new DeleteWorkflowRequest();
    $request->deleteWorkflowRequest->workflowId = 'vel';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = DeleteWorkflowXAmzTargetEnum::TRANSFER_SERVICE_DELETE_WORKFLOW;

    $response = $sdk->sdk->deleteWorkflow($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAccess

<p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAccessRequest();
    $request->describeAccessRequest = new DescribeAccessRequest();
    $request->describeAccessRequest->externalId = 'id';
    $request->describeAccessRequest->serverId = 'labore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = DescribeAccessXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_ACCESS;

    $response = $sdk->sdk->describeAccess($request);

    if ($response->describeAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeAgreement

Describes the agreement that's identified by the <code>AgreementId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAgreementRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeAgreementRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAgreementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAgreementRequest();
    $request->describeAgreementRequest = new DescribeAgreementRequest();
    $request->describeAgreementRequest->agreementId = 'architecto';
    $request->describeAgreementRequest->serverId = 'magnam';
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzTarget = DescribeAgreementXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_AGREEMENT;

    $response = $sdk->sdk->describeAgreement($request);

    if ($response->describeAgreementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCertificate

Describes the certificate that's identified by the <code>CertificateId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCertificateRequest();
    $request->describeCertificateRequest = new DescribeCertificateRequest();
    $request->describeCertificateRequest->certificateId = 'mollitia';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = DescribeCertificateXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_CERTIFICATE;

    $response = $sdk->sdk->describeCertificate($request);

    if ($response->describeCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeConnector

Describes the connector that's identified by the <code>ConnectorId.</code> 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeConnectorRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeConnectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeConnectorRequest();
    $request->describeConnectorRequest = new DescribeConnectorRequest();
    $request->describeConnectorRequest->connectorId = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->xAmzTarget = DescribeConnectorXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_CONNECTOR;

    $response = $sdk->sdk->describeConnector($request);

    if ($response->describeConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeExecution

You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExecutionRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeExecutionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeExecutionXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeExecutionRequest();
    $request->describeExecutionRequest = new DescribeExecutionRequest();
    $request->describeExecutionRequest->executionId = 'facilis';
    $request->describeExecutionRequest->workflowId = 'in';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';
    $request->xAmzTarget = DescribeExecutionXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_EXECUTION;

    $response = $sdk->sdk->describeExecution($request);

    if ($response->describeExecutionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeHostKey

Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHostKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeHostKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeHostKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeHostKeyRequest();
    $request->describeHostKeyRequest = new DescribeHostKeyRequest();
    $request->describeHostKeyRequest->hostKeyId = 'quibusdam';
    $request->describeHostKeyRequest->serverId = 'sed';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'magni';
    $request->xAmzTarget = DescribeHostKeyXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_HOST_KEY;

    $response = $sdk->sdk->describeHostKey($request);

    if ($response->describeHostKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeProfile

Returns the details of the profile that's specified by the <code>ProfileId</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeProfileRequest();
    $request->describeProfileRequest = new DescribeProfileRequest();
    $request->describeProfileRequest->profileId = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = DescribeProfileXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_PROFILE;

    $response = $sdk->sdk->describeProfile($request);

    if ($response->describeProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeSecurityPolicy

Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeSecurityPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeSecurityPolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeSecurityPolicyRequest();
    $request->describeSecurityPolicyRequest = new DescribeSecurityPolicyRequest();
    $request->describeSecurityPolicyRequest->securityPolicyName = 'ea';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'autem';
    $request->xAmzTarget = DescribeSecurityPolicyXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_SECURITY_POLICY;

    $response = $sdk->sdk->describeSecurityPolicy($request);

    if ($response->describeSecurityPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeServer

<p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeServerRequest();
    $request->describeServerRequest = new DescribeServerRequest();
    $request->describeServerRequest->serverId = 'nam';
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'voluptatibus';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'amet';
    $request->xAmzTarget = DescribeServerXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_SERVER;

    $response = $sdk->sdk->describeServer($request);

    if ($response->describeServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeUser

<p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeUserRequest();
    $request->describeUserRequest = new DescribeUserRequest();
    $request->describeUserRequest->serverId = 'aut';
    $request->describeUserRequest->userName = 'Norwood_Hessel74';
    $request->xAmzAlgorithm = 'dolores';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'nesciunt';
    $request->xAmzTarget = DescribeUserXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_USER;

    $response = $sdk->sdk->describeUser($request);

    if ($response->describeUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeWorkflow

Describes the specified workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeWorkflowRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWorkflowXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWorkflowRequest();
    $request->describeWorkflowRequest = new DescribeWorkflowRequest();
    $request->describeWorkflowRequest->workflowId = 'eos';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->xAmzTarget = DescribeWorkflowXAmzTargetEnum::TRANSFER_SERVICE_DESCRIBE_WORKFLOW;

    $response = $sdk->sdk->describeWorkflow($request);

    if ($response->describeWorkflowResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importCertificate

Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\CertificateUsageTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ImportCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportCertificateRequest();
    $request->importCertificateRequest = new ImportCertificateRequest();
    $request->importCertificateRequest->activeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-20T18:01:24.992Z');
    $request->importCertificateRequest->certificate = 'omnis';
    $request->importCertificateRequest->certificateChain = 'facilis';
    $request->importCertificateRequest->description = 'perspiciatis';
    $request->importCertificateRequest->inactiveDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T23:16:34.777Z');
    $request->importCertificateRequest->privateKey = 'consequuntur';
    $request->importCertificateRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->importCertificateRequest->usage = CertificateUsageTypeEnum::ENCRYPTION;
    $request->xAmzAlgorithm = 'eaque';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'adipisci';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'earum';
    $request->xAmzSignedHeaders = 'modi';
    $request->xAmzTarget = ImportCertificateXAmzTargetEnum::TRANSFER_SERVICE_IMPORT_CERTIFICATE;

    $response = $sdk->sdk->importCertificate($request);

    if ($response->importCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importHostKey

Adds a host key to the server that's specified by the <code>ServerId</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportHostKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportHostKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\ImportHostKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportHostKeyRequest();
    $request->importHostKeyRequest = new ImportHostKeyRequest();
    $request->importHostKeyRequest->description = 'iste';
    $request->importHostKeyRequest->hostKeyBody = 'dolorum';
    $request->importHostKeyRequest->serverId = 'deleniti';
    $request->importHostKeyRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = ImportHostKeyXAmzTargetEnum::TRANSFER_SERVICE_IMPORT_HOST_KEY;

    $response = $sdk->sdk->importHostKey($request);

    if ($response->importHostKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importSshPublicKey

<p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportSshPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportSshPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportSshPublicKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportSshPublicKeyRequest();
    $request->importSshPublicKeyRequest = new ImportSshPublicKeyRequest();
    $request->importSshPublicKeyRequest->serverId = 'dolorem';
    $request->importSshPublicKeyRequest->sshPublicKeyBody = 'dolorem';
    $request->importSshPublicKeyRequest->userName = 'Dameon94';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = ImportSshPublicKeyXAmzTargetEnum::TRANSFER_SERVICE_IMPORT_SSH_PUBLIC_KEY;

    $response = $sdk->sdk->importSshPublicKey($request);

    if ($response->importSshPublicKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAccesses

Lists the details for all the accesses you have on your server.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAccessesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAccessesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccessesRequest();
    $request->listAccessesRequest = new ListAccessesRequest();
    $request->listAccessesRequest->maxResults = 254356;
    $request->listAccessesRequest->nextToken = 'veritatis';
    $request->listAccessesRequest->serverId = 'ipsa';
    $request->maxResults = 'ipsa';
    $request->nextToken = 'iure';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'natus';
    $request->xAmzTarget = ListAccessesXAmzTargetEnum::TRANSFER_SERVICE_LIST_ACCESSES;

    $response = $sdk->sdk->listAccesses($request);

    if ($response->listAccessesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAgreements

Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAgreementsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListAgreementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAgreementsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAgreementsRequest();
    $request->listAgreementsRequest = new ListAgreementsRequest();
    $request->listAgreementsRequest->maxResults = 179603;
    $request->listAgreementsRequest->nextToken = 'atque';
    $request->listAgreementsRequest->serverId = 'sit';
    $request->maxResults = 'fugiat';
    $request->nextToken = 'ab';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzTarget = ListAgreementsXAmzTargetEnum::TRANSFER_SERVICE_LIST_AGREEMENTS;

    $response = $sdk->sdk->listAgreements($request);

    if ($response->listAgreementsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCertificates

Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListCertificatesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCertificatesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCertificatesRequest();
    $request->listCertificatesRequest = new ListCertificatesRequest();
    $request->listCertificatesRequest->maxResults = 896672;
    $request->listCertificatesRequest->nextToken = 'distinctio';
    $request->maxResults = 'asperiores';
    $request->nextToken = 'nihil';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = ListCertificatesXAmzTargetEnum::TRANSFER_SERVICE_LIST_CERTIFICATES;

    $response = $sdk->sdk->listCertificates($request);

    if ($response->listCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listConnectors

Lists the connectors for the specified Region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListConnectorsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListConnectorsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListConnectorsRequest();
    $request->listConnectorsRequest = new ListConnectorsRequest();
    $request->listConnectorsRequest->maxResults = 229219;
    $request->listConnectorsRequest->nextToken = 'optio';
    $request->maxResults = 'accusamus';
    $request->nextToken = 'ad';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = ListConnectorsXAmzTargetEnum::TRANSFER_SERVICE_LIST_CONNECTORS;

    $response = $sdk->sdk->listConnectors($request);

    if ($response->listConnectorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listExecutions

Lists all executions for the specified workflow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListExecutionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListExecutionsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListExecutionsRequest();
    $request->listExecutionsRequest = new ListExecutionsRequest();
    $request->listExecutionsRequest->maxResults = 628982;
    $request->listExecutionsRequest->nextToken = 'alias';
    $request->listExecutionsRequest->workflowId = 'at';
    $request->maxResults = 'quaerat';
    $request->nextToken = 'tempora';
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzTarget = ListExecutionsXAmzTargetEnum::TRANSFER_SERVICE_LIST_EXECUTIONS;

    $response = $sdk->sdk->listExecutions($request);

    if ($response->listExecutionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHostKeys

Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListHostKeysRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListHostKeysRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListHostKeysXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHostKeysRequest();
    $request->listHostKeysRequest = new ListHostKeysRequest();
    $request->listHostKeysRequest->maxResults = 687488;
    $request->listHostKeysRequest->nextToken = 'iusto';
    $request->listHostKeysRequest->serverId = 'ipsum';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'enim';
    $request->xAmzTarget = ListHostKeysXAmzTargetEnum::TRANSFER_SERVICE_LIST_HOST_KEYS;

    $response = $sdk->sdk->listHostKeys($request);

    if ($response->listHostKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProfiles

Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProfilesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProfileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListProfilesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProfilesRequest();
    $request->listProfilesRequest = new ListProfilesRequest();
    $request->listProfilesRequest->maxResults = 213312;
    $request->listProfilesRequest->nextToken = 'sapiente';
    $request->listProfilesRequest->profileType = ProfileTypeEnum::PARTNER;
    $request->maxResults = 'nihil';
    $request->nextToken = 'sit';
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'voluptas';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = ListProfilesXAmzTargetEnum::TRANSFER_SERVICE_LIST_PROFILES;

    $response = $sdk->sdk->listProfiles($request);

    if ($response->listProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSecurityPolicies

Lists the security policies that are attached to your file transfer protocol-enabled servers.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSecurityPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSecurityPoliciesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSecurityPoliciesRequest();
    $request->listSecurityPoliciesRequest = new ListSecurityPoliciesRequest();
    $request->listSecurityPoliciesRequest->maxResults = 463575;
    $request->listSecurityPoliciesRequest->nextToken = 'ipsum';
    $request->maxResults = 'incidunt';
    $request->nextToken = 'qui';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'soluta';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'totam';
    $request->xAmzTarget = ListSecurityPoliciesXAmzTargetEnum::TRANSFER_SERVICE_LIST_SECURITY_POLICIES;

    $response = $sdk->sdk->listSecurityPolicies($request);

    if ($response->listSecurityPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listServers

Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListServersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListServersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListServersRequest();
    $request->listServersRequest = new ListServersRequest();
    $request->listServersRequest->maxResults = 276894;
    $request->listServersRequest->nextToken = 'aspernatur';
    $request->maxResults = 'dolores';
    $request->nextToken = 'distinctio';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quam';
    $request->xAmzDate = 'molestias';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'neque';
    $request->xAmzTarget = ListServersXAmzTargetEnum::TRANSFER_SERVICE_LIST_SERVERS;

    $response = $sdk->sdk->listServers($request);

    if ($response->listServersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest = new ListTagsForResourceRequest();
    $request->listTagsForResourceRequest->arn = 'fugit';
    $request->listTagsForResourceRequest->maxResults = 164959;
    $request->listTagsForResourceRequest->nextToken = 'odio';
    $request->maxResults = 'sunt';
    $request->nextToken = 'ullam';
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'soluta';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'et';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::TRANSFER_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUsers

Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListUsersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUsersXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUsersRequest();
    $request->listUsersRequest = new ListUsersRequest();
    $request->listUsersRequest->maxResults = 903720;
    $request->listUsersRequest->nextToken = 'ipsum';
    $request->listUsersRequest->serverId = 'veritatis';
    $request->maxResults = 'nobis';
    $request->nextToken = 'quos';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'aperiam';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = ListUsersXAmzTargetEnum::TRANSFER_SERVICE_LIST_USERS;

    $response = $sdk->sdk->listUsers($request);

    if ($response->listUsersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWorkflows

Lists all of your workflows.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListWorkflowsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWorkflowsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWorkflowsRequest();
    $request->listWorkflowsRequest = new ListWorkflowsRequest();
    $request->listWorkflowsRequest->maxResults = 240829;
    $request->listWorkflowsRequest->nextToken = 'dolorum';
    $request->maxResults = 'architecto';
    $request->nextToken = 'quae';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'quas';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzTarget = ListWorkflowsXAmzTargetEnum::TRANSFER_SERVICE_LIST_WORKFLOWS;

    $response = $sdk->sdk->listWorkflows($request);

    if ($response->listWorkflowsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendWorkflowStepState

<p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendWorkflowStepStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendWorkflowStepStateRequest;
use \OpenAPI\OpenAPI\Models\Shared\CustomStepStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\SendWorkflowStepStateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendWorkflowStepStateRequest();
    $request->sendWorkflowStepStateRequest = new SendWorkflowStepStateRequest();
    $request->sendWorkflowStepStateRequest->executionId = 'doloribus';
    $request->sendWorkflowStepStateRequest->status = CustomStepStatusEnum::SUCCESS;
    $request->sendWorkflowStepStateRequest->token = 'facilis';
    $request->sendWorkflowStepStateRequest->workflowId = 'cupiditate';
    $request->xAmzAlgorithm = 'qui';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'laudantium';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'quisquam';
    $request->xAmzTarget = SendWorkflowStepStateXAmzTargetEnum::TRANSFER_SERVICE_SEND_WORKFLOW_STEP_STATE;

    $response = $sdk->sdk->sendWorkflowStepState($request);

    if ($response->sendWorkflowStepStateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startFileTransfer

Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartFileTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartFileTransferRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartFileTransferXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartFileTransferRequest();
    $request->startFileTransferRequest = new StartFileTransferRequest();
    $request->startFileTransferRequest->connectorId = 'vero';
    $request->startFileTransferRequest->sendFilePaths = [
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->xAmzTarget = StartFileTransferXAmzTargetEnum::TRANSFER_SERVICE_START_FILE_TRANSFER;

    $response = $sdk->sdk->startFileTransfer($request);

    if ($response->startFileTransferResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startServer

<p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartServerRequest();
    $request->startServerRequest = new StartServerRequest();
    $request->startServerRequest->serverId = 'quod';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->xAmzTarget = StartServerXAmzTargetEnum::TRANSFER_SERVICE_START_SERVER;

    $response = $sdk->sdk->startServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopServer

<p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopServerRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopServerRequest();
    $request->stopServerRequest = new StopServerRequest();
    $request->stopServerRequest->serverId = 'illum';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'exercitationem';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = StopServerXAmzTargetEnum::TRANSFER_SERVICE_STOP_SERVER;

    $response = $sdk->sdk->stopServer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceRequest = new TagResourceRequest();
    $request->tagResourceRequest->arn = 'fugit';
    $request->tagResourceRequest->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'doloribus';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'ducimus';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::TRANSFER_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testIdentityProvider

<p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TestIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\TestIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestIdentityProviderXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestIdentityProviderRequest();
    $request->testIdentityProviderRequest = new TestIdentityProviderRequest();
    $request->testIdentityProviderRequest->serverId = 'tempora';
    $request->testIdentityProviderRequest->serverProtocol = ProtocolEnum::FTP;
    $request->testIdentityProviderRequest->sourceIp = 'ea';
    $request->testIdentityProviderRequest->userName = 'Brielle.Keebler18';
    $request->testIdentityProviderRequest->userPassword = 'ex';
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'nulla';
    $request->xAmzTarget = TestIdentityProviderXAmzTargetEnum::TRANSFER_SERVICE_TEST_IDENTITY_PROVIDER;

    $response = $sdk->sdk->testIdentityProvider($request);

    if ($response->testIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceRequest = new UntagResourceRequest();
    $request->untagResourceRequest->arn = 'excepturi';
    $request->untagResourceRequest->tagKeys = [
        'nostrum',
        'sapiente',
        'quisquam',
        'saepe',
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'veniam';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'magnam';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::TRANSFER_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAccess

Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryMapEntry;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccessXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccessRequest();
    $request->updateAccessRequest = new UpdateAccessRequest();
    $request->updateAccessRequest->externalId = 'ea';
    $request->updateAccessRequest->homeDirectory = 'quo';
    $request->updateAccessRequest->homeDirectoryMappings = [
        new HomeDirectoryMapEntry(),
    ];
    $request->updateAccessRequest->homeDirectoryType = HomeDirectoryTypeEnum::LOGICAL;
    $request->updateAccessRequest->policy = 'aspernatur';
    $request->updateAccessRequest->posixProfile = new PosixProfile();
    $request->updateAccessRequest->posixProfile->gid = 325310;
    $request->updateAccessRequest->posixProfile->secondaryGids = [
        952871,
    ];
    $request->updateAccessRequest->posixProfile->uid = 725595;
    $request->updateAccessRequest->role = 'aut';
    $request->updateAccessRequest->serverId = 'aut';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'impedit';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'fugit';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'inventore';
    $request->xAmzSignedHeaders = 'non';
    $request->xAmzTarget = UpdateAccessXAmzTargetEnum::TRANSFER_SERVICE_UPDATE_ACCESS;

    $response = $sdk->sdk->updateAccess($request);

    if ($response->updateAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateAgreement

Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgreementRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAgreementRequest;
use \OpenAPI\OpenAPI\Models\Shared\AgreementStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAgreementXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAgreementRequest();
    $request->updateAgreementRequest = new UpdateAgreementRequest();
    $request->updateAgreementRequest->accessRole = 'et';
    $request->updateAgreementRequest->agreementId = 'dolorum';
    $request->updateAgreementRequest->baseDirectory = 'laborum';
    $request->updateAgreementRequest->description = 'placeat';
    $request->updateAgreementRequest->localProfileId = 'velit';
    $request->updateAgreementRequest->partnerProfileId = 'eum';
    $request->updateAgreementRequest->serverId = 'autem';
    $request->updateAgreementRequest->status = AgreementStatusTypeEnum::INACTIVE;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = UpdateAgreementXAmzTargetEnum::TRANSFER_SERVICE_UPDATE_AGREEMENT;

    $response = $sdk->sdk->updateAgreement($request);

    if ($response->updateAgreementResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCertificate

Updates the active and inactive dates for a certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCertificateXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCertificateRequest();
    $request->updateCertificateRequest = new UpdateCertificateRequest();
    $request->updateCertificateRequest->activeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-14T00:12:37.683Z');
    $request->updateCertificateRequest->certificateId = 'provident';
    $request->updateCertificateRequest->description = 'ipsa';
    $request->updateCertificateRequest->inactiveDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-12T21:59:44.784Z');
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'eius';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'rem';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = UpdateCertificateXAmzTargetEnum::TRANSFER_SERVICE_UPDATE_CERTIFICATE;

    $response = $sdk->sdk->updateCertificate($request);

    if ($response->updateCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConnector

Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateConnectorRequest;
use \OpenAPI\OpenAPI\Models\Shared\As2ConnectorConfig;
use \OpenAPI\OpenAPI\Models\Shared\CompressionEnumEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptionAlgEnum;
use \OpenAPI\OpenAPI\Models\Shared\MdnResponseEnum;
use \OpenAPI\OpenAPI\Models\Shared\MdnSigningAlgEnum;
use \OpenAPI\OpenAPI\Models\Shared\SigningAlgEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateConnectorXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateConnectorRequest();
    $request->updateConnectorRequest = new UpdateConnectorRequest();
    $request->updateConnectorRequest->accessRole = 'quidem';
    $request->updateConnectorRequest->as2Config = new As2ConnectorConfig();
    $request->updateConnectorRequest->as2Config->compression = CompressionEnumEnum::DISABLED;
    $request->updateConnectorRequest->as2Config->encryptionAlgorithm = EncryptionAlgEnum::AES192_CBC;
    $request->updateConnectorRequest->as2Config->localProfileId = 'eum';
    $request->updateConnectorRequest->as2Config->mdnResponse = MdnResponseEnum::SYNC;
    $request->updateConnectorRequest->as2Config->mdnSigningAlgorithm = MdnSigningAlgEnum::NONE;
    $request->updateConnectorRequest->as2Config->messageSubject = 'eos';
    $request->updateConnectorRequest->as2Config->partnerProfileId = 'praesentium';
    $request->updateConnectorRequest->as2Config->signingAlgorithm = SigningAlgEnum::SHA1;
    $request->updateConnectorRequest->connectorId = 'veritatis';
    $request->updateConnectorRequest->loggingRole = 'ipsa';
    $request->updateConnectorRequest->url = 'id';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'neque';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'fuga';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzTarget = UpdateConnectorXAmzTargetEnum::TRANSFER_SERVICE_UPDATE_CONNECTOR;

    $response = $sdk->sdk->updateConnector($request);

    if ($response->updateConnectorResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHostKey

Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateHostKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostKeyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHostKeyRequest();
    $request->updateHostKeyRequest = new UpdateHostKeyRequest();
    $request->updateHostKeyRequest->description = 'eos';
    $request->updateHostKeyRequest->hostKeyId = 'voluptas';
    $request->updateHostKeyRequest->serverId = 'ab';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'consequatur';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'sequi';
    $request->xAmzTarget = UpdateHostKeyXAmzTargetEnum::TRANSFER_SERVICE_UPDATE_HOST_KEY;

    $response = $sdk->sdk->updateHostKey($request);

    if ($response->updateHostKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProfile

Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProfileRequest();
    $request->updateProfileRequest = new UpdateProfileRequest();
    $request->updateProfileRequest->certificateIds = [
        'esse',
        'recusandae',
        'aperiam',
        'distinctio',
    ];
    $request->updateProfileRequest->profileId = 'quod';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'inventore';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'aliquam';
    $request->xAmzSignedHeaders = 'odio';
    $request->xAmzTarget = UpdateProfileXAmzTargetEnum::TRANSFER_SERVICE_UPDATE_PROFILE;

    $response = $sdk->sdk->updateProfile($request);

    if ($response->updateProfileResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateServer

<p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateServerRequest;
use \OpenAPI\OpenAPI\Models\Shared\EndpointDetails;
use \OpenAPI\OpenAPI\Models\Shared\EndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IdentityProviderDetails;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolDetails;
use \OpenAPI\OpenAPI\Models\Shared\As2TransportEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetStatOptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\TlsSessionResumptionModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowDetails;
use \OpenAPI\OpenAPI\Models\Shared\WorkflowDetail;
use \OpenAPI\OpenAPI\Models\Operations\UpdateServerXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateServerRequest();
    $request->updateServerRequest = new UpdateServerRequest();
    $request->updateServerRequest->certificate = 'occaecati';
    $request->updateServerRequest->endpointDetails = new EndpointDetails();
    $request->updateServerRequest->endpointDetails->addressAllocationIds = [
        'sapiente',
        'dolores',
    ];
    $request->updateServerRequest->endpointDetails->securityGroupIds = [
        'molestiae',
        'accusantium',
        'porro',
    ];
    $request->updateServerRequest->endpointDetails->subnetIds = [
        'quas',
        'praesentium',
    ];
    $request->updateServerRequest->endpointDetails->vpcEndpointId = 'consequuntur';
    $request->updateServerRequest->endpointDetails->vpcId = 'deleniti';
    $request->updateServerRequest->endpointType = EndpointTypeEnum::PUBLIC;
    $request->updateServerRequest->hostKey = 'fuga';
    $request->updateServerRequest->identityProviderDetails = new IdentityProviderDetails();
    $request->updateServerRequest->identityProviderDetails->directoryId = 'mollitia';
    $request->updateServerRequest->identityProviderDetails->function = 'incidunt';
    $request->updateServerRequest->identityProviderDetails->invocationRole = 'atque';
    $request->updateServerRequest->identityProviderDetails->url = 'explicabo';
    $request->updateServerRequest->loggingRole = 'minima';
    $request->updateServerRequest->postAuthenticationLoginBanner = 'nisi';
    $request->updateServerRequest->preAuthenticationLoginBanner = 'fugit';
    $request->updateServerRequest->protocolDetails = new ProtocolDetails();
    $request->updateServerRequest->protocolDetails->as2Transports = [
        As2TransportEnum::HTTP,
        As2TransportEnum::HTTP,
        As2TransportEnum::HTTP,
        As2TransportEnum::HTTP,
    ];
    $request->updateServerRequest->protocolDetails->passiveIp = 'consequuntur';
    $request->updateServerRequest->protocolDetails->setStatOption = SetStatOptionEnum::DEFAULT;
    $request->updateServerRequest->protocolDetails->tlsSessionResumptionMode = TlsSessionResumptionModeEnum::DISABLED;
    $request->updateServerRequest->protocols = [
        ProtocolEnum::FTPS,
        ProtocolEnum::FTPS,
        ProtocolEnum::SFTP,
        ProtocolEnum::FTP,
    ];
    $request->updateServerRequest->securityPolicyName = 'eveniet';
    $request->updateServerRequest->serverId = 'accusamus';
    $request->updateServerRequest->workflowDetails = new WorkflowDetails();
    $request->updateServerRequest->workflowDetails->onPartialUpload = [
        new WorkflowDetail(),
    ];
    $request->updateServerRequest->workflowDetails->onUpload = [
        new WorkflowDetail(),
        new WorkflowDetail(),
    ];
    $request->xAmzAlgorithm = 'quod';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = UpdateServerXAmzTargetEnum::TRANSFER_SERVICE_UPDATE_SERVER;

    $response = $sdk->sdk->updateServer($request);

    if ($response->updateServerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUser

<p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateUserRequest;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryMapEntry;
use \OpenAPI\OpenAPI\Models\Shared\HomeDirectoryTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PosixProfile;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserRequest();
    $request->updateUserRequest = new UpdateUserRequest();
    $request->updateUserRequest->homeDirectory = 'harum';
    $request->updateUserRequest->homeDirectoryMappings = [
        new HomeDirectoryMapEntry(),
        new HomeDirectoryMapEntry(),
    ];
    $request->updateUserRequest->homeDirectoryType = HomeDirectoryTypeEnum::LOGICAL;
    $request->updateUserRequest->policy = 'occaecati';
    $request->updateUserRequest->posixProfile = new PosixProfile();
    $request->updateUserRequest->posixProfile->gid = 327720;
    $request->updateUserRequest->posixProfile->secondaryGids = [
        756779,
        27069,
        636061,
    ];
    $request->updateUserRequest->posixProfile->uid = 731398;
    $request->updateUserRequest->role = 'adipisci';
    $request->updateUserRequest->serverId = 'cumque';
    $request->updateUserRequest->userName = 'Carole.Altenwerth95';
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'blanditiis';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'a';
    $request->xAmzSignature = 'nulla';
    $request->xAmzSignedHeaders = 'quas';
    $request->xAmzTarget = UpdateUserXAmzTargetEnum::TRANSFER_SERVICE_UPDATE_USER;

    $response = $sdk->sdk->updateUser($request);

    if ($response->updateUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
