import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["http://transfer.{region}.amazonaws.com", "https://transfer.{region}.amazonaws.com", "http://transfer.{region}.amazonaws.com.cn", "https://transfer.{region}.amazonaws.com.cn"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * Transfer Family is a fully managed service that enables the transfer of files over the File Transfer Protocol (FTP), File Transfer Protocol over SSL (FTPS), or Secure Shell (SSH) File Transfer Protocol (SFTP) directly into and out of Amazon Simple Storage Service (Amazon S3) or Amazon EFS. Additionally, you can use Applicability Statement 2 (AS2) to transfer files into and out of Amazon S3. Amazon Web Services helps you seamlessly migrate your file transfer workflows to Transfer Family by integrating with existing authentication systems, and providing DNS routing with Amazon Route 53 so nothing changes for your customers and partners, or their applications. With your data in Amazon S3, you can use it with Amazon Web Services for processing, analytics, machine learning, and archiving. Getting started with Transfer Family is easy since there is no infrastructure to buy and set up.
 *
 * @see {@link https://docs.aws.amazon.com/transfer/} - Amazon Web Services documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Used by administrators to choose which groups in the directory should have access to upload and download files over the enabled protocols using Transfer Family. For example, a Microsoft Active Directory might contain 50,000 users, but only a small fraction might need the ability to transfer files to the server. An administrator can use <code>CreateAccess</code> to limit the access to the correct set of users who need this ability.
     */
    createAccess(req: operations.CreateAccessRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccessResponse>;
    /**
     * <p>Creates an agreement. An agreement is a bilateral trading partner agreement, or partnership, between an Transfer Family server and an AS2 process. The agreement defines the file and message transfer relationship between the server and the AS2 process. To define an agreement, Transfer Family combines a server, local profile, partner profile, certificate, and other attributes.</p> <p>The partner is identified with the <code>PartnerProfileId</code>, and the AS2 process is identified with the <code>LocalProfileId</code>.</p>
     */
    createAgreement(req: operations.CreateAgreementRequest, config?: AxiosRequestConfig): Promise<operations.CreateAgreementResponse>;
    /**
     * Creates the connector, which captures the parameters for an outbound connection for the AS2 protocol. The connector is required for sending files to an externally hosted AS2 server. For more details about connectors, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/create-b2b-server.html#configure-as2-connector">Create AS2 connectors</a>.
     */
    createConnector(req: operations.CreateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectorResponse>;
    /**
     * Creates the local or partner profile to use for AS2 transfers.
     */
    createProfile(req: operations.CreateProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateProfileResponse>;
    /**
     * Instantiates an auto-scaling virtual server based on the selected file transfer protocol in Amazon Web Services. When you make updates to your file transfer protocol-enabled server or when you work with users, use the service-generated <code>ServerId</code> property that is assigned to the newly created server.
     */
    createServer(req: operations.CreateServerRequest, config?: AxiosRequestConfig): Promise<operations.CreateServerResponse>;
    /**
     * Creates a user and associates them with an existing file transfer protocol-enabled server. You can only create and associate users with servers that have the <code>IdentityProviderType</code> set to <code>SERVICE_MANAGED</code>. Using parameters for <code>CreateUser</code>, you can specify the user name, set the home directory, store the user's public key, and assign the user's Identity and Access Management (IAM) role. You can also optionally add a session policy, and assign metadata with tags that can be used to group and search for users.
     */
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     *  Allows you to create a workflow with specified steps and step details the workflow invokes after file transfer completes. After creating a workflow, you can associate the workflow created with any transfer servers by specifying the <code>workflow-details</code> field in <code>CreateServer</code> and <code>UpdateServer</code> operations.
     */
    createWorkflow(req: operations.CreateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkflowResponse>;
    /**
     * Allows you to delete the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
     */
    deleteAccess(req: operations.DeleteAccessRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccessResponse>;
    /**
     * Delete the agreement that's specified in the provided <code>AgreementId</code>.
     */
    deleteAgreement(req: operations.DeleteAgreementRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAgreementResponse>;
    /**
     * Deletes the certificate that's specified in the <code>CertificateId</code> parameter.
     */
    deleteCertificate(req: operations.DeleteCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCertificateResponse>;
    /**
     * Deletes the agreement that's specified in the provided <code>ConnectorId</code>.
     */
    deleteConnector(req: operations.DeleteConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorResponse>;
    /**
     * Deletes the host key that's specified in the <code>HoskKeyId</code> parameter.
     */
    deleteHostKey(req: operations.DeleteHostKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHostKeyResponse>;
    /**
     * Deletes the profile that's specified in the <code>ProfileId</code> parameter.
     */
    deleteProfile(req: operations.DeleteProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileResponse>;
    /**
     * <p>Deletes the file transfer protocol-enabled server that you specify.</p> <p>No response returns from this operation.</p>
     */
    deleteServer(req: operations.DeleteServerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServerResponse>;
    /**
     * Deletes a user's Secure Shell (SSH) public key.
     */
    deleteSshPublicKey(req: operations.DeleteSshPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSshPublicKeyResponse>;
    /**
     * <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p> <p>No response returns from this operation.</p> <note> <p>When you delete a user from a server, the user's information is lost.</p> </note>
     */
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * Deletes the specified workflow.
     */
    deleteWorkflow(req: operations.DeleteWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowResponse>;
    /**
     * <p>Describes the access that is assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property and its <code>ExternalId</code>.</p> <p>The response from this call returns the properties of the access that is associated with the <code>ServerId</code> value that was specified.</p>
     */
    describeAccess(req: operations.DescribeAccessRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccessResponse>;
    /**
     * Describes the agreement that's identified by the <code>AgreementId</code>.
     */
    describeAgreement(req: operations.DescribeAgreementRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAgreementResponse>;
    /**
     * Describes the certificate that's identified by the <code>CertificateId</code>.
     */
    describeCertificate(req: operations.DescribeCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCertificateResponse>;
    /**
     * Describes the connector that's identified by the <code>ConnectorId.</code>
     */
    describeConnector(req: operations.DescribeConnectorRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectorResponse>;
    /**
     * You can use <code>DescribeExecution</code> to check the details of the execution of the specified workflow.
     */
    describeExecution(req: operations.DescribeExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExecutionResponse>;
    /**
     * Returns the details of the host key that's specified by the <code>HostKeyId</code> and <code>ServerId</code>.
     */
    describeHostKey(req: operations.DescribeHostKeyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeHostKeyResponse>;
    /**
     * Returns the details of the profile that's specified by the <code>ProfileId</code>.
     */
    describeProfile(req: operations.DescribeProfileRequest, config?: AxiosRequestConfig): Promise<operations.DescribeProfileResponse>;
    /**
     * Describes the security policy that is attached to your file transfer protocol-enabled server. The response contains a description of the security policy's properties. For more information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security policies</a>.
     */
    describeSecurityPolicy(req: operations.DescribeSecurityPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSecurityPolicyResponse>;
    /**
     * <p>Describes a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.</p> <p>The response contains a description of a server's properties. When you set <code>EndpointType</code> to VPC, the response will contain the <code>EndpointDetails</code>.</p>
     */
    describeServer(req: operations.DescribeServerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServerResponse>;
    /**
     * <p>Describes the user assigned to the specific file transfer protocol-enabled server, as identified by its <code>ServerId</code> property.</p> <p>The response from this call returns the properties of the user associated with the <code>ServerId</code> value that was specified.</p>
     */
    describeUser(req: operations.DescribeUserRequest, config?: AxiosRequestConfig): Promise<operations.DescribeUserResponse>;
    /**
     * Describes the specified workflow.
     */
    describeWorkflow(req: operations.DescribeWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.DescribeWorkflowResponse>;
    /**
     * Imports the signing and encryption certificates that you need to create local (AS2) profiles and partner profiles.
     */
    importCertificate(req: operations.ImportCertificateRequest, config?: AxiosRequestConfig): Promise<operations.ImportCertificateResponse>;
    /**
     * Adds a host key to the server that's specified by the <code>ServerId</code> parameter.
     */
    importHostKey(req: operations.ImportHostKeyRequest, config?: AxiosRequestConfig): Promise<operations.ImportHostKeyResponse>;
    /**
     * <p>Adds a Secure Shell (SSH) public key to a user account identified by a <code>UserName</code> value assigned to the specific file transfer protocol-enabled server, identified by <code>ServerId</code>.</p> <p>The response returns the <code>UserName</code> value, the <code>ServerId</code> value, and the name of the <code>SshPublicKeyId</code>.</p>
     */
    importSshPublicKey(req: operations.ImportSshPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.ImportSshPublicKeyResponse>;
    /**
     * Lists the details for all the accesses you have on your server.
     */
    listAccesses(req: operations.ListAccessesRequest, config?: AxiosRequestConfig): Promise<operations.ListAccessesResponse>;
    /**
     * Returns a list of the agreements for the server that's identified by the <code>ServerId</code> that you supply. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing agreements from where you left off.
     */
    listAgreements(req: operations.ListAgreementsRequest, config?: AxiosRequestConfig): Promise<operations.ListAgreementsResponse>;
    /**
     * Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for the <code>NextToken</code> parameter, you can supply that value to continue listing certificates from where you left off.
     */
    listCertificates(req: operations.ListCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.ListCertificatesResponse>;
    /**
     * Lists the connectors for the specified Region.
     */
    listConnectors(req: operations.ListConnectorsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorsResponse>;
    /**
     * Lists all executions for the specified workflow.
     */
    listExecutions(req: operations.ListExecutionsRequest, config?: AxiosRequestConfig): Promise<operations.ListExecutionsResponse>;
    /**
     * Returns a list of host keys for the server that's specified by the <code>ServerId</code> parameter.
     */
    listHostKeys(req: operations.ListHostKeysRequest, config?: AxiosRequestConfig): Promise<operations.ListHostKeysResponse>;
    /**
     * Returns a list of the profiles for your system. If you want to limit the results to a certain number, supply a value for the <code>MaxResults</code> parameter. If you ran the command previously and received a value for <code>NextToken</code>, you can supply that value to continue listing profiles from where you left off.
     */
    listProfiles(req: operations.ListProfilesRequest, config?: AxiosRequestConfig): Promise<operations.ListProfilesResponse>;
    /**
     * Lists the security policies that are attached to your file transfer protocol-enabled servers.
     */
    listSecurityPolicies(req: operations.ListSecurityPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListSecurityPoliciesResponse>;
    /**
     * Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services account.
     */
    listServers(req: operations.ListServersRequest, config?: AxiosRequestConfig): Promise<operations.ListServersResponse>;
    /**
     * Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.
     */
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * Lists the users for a file transfer protocol-enabled server that you specify by passing the <code>ServerId</code> parameter.
     */
    listUsers(req: operations.ListUsersRequest, config?: AxiosRequestConfig): Promise<operations.ListUsersResponse>;
    /**
     * Lists all of your workflows.
     */
    listWorkflows(req: operations.ListWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkflowsResponse>;
    /**
     * <p>Sends a callback for asynchronous custom steps.</p> <p> The <code>ExecutionId</code>, <code>WorkflowId</code>, and <code>Token</code> are passed to the target resource during execution of a custom step of a workflow. You must include those with their callback as well as providing a status. </p>
     */
    sendWorkflowStepState(req: operations.SendWorkflowStepStateRequest, config?: AxiosRequestConfig): Promise<operations.SendWorkflowStepStateResponse>;
    /**
     * Begins an outbound file transfer to a remote AS2 server. You specify the <code>ConnectorId</code> and the file paths for where to send the files.
     */
    startFileTransfer(req: operations.StartFileTransferRequest, config?: AxiosRequestConfig): Promise<operations.StartFileTransferResponse>;
    /**
     * <p>Changes the state of a file transfer protocol-enabled server from <code>OFFLINE</code> to <code>ONLINE</code>. It has no impact on a server that is already <code>ONLINE</code>. An <code>ONLINE</code> server can accept and process file transfer jobs.</p> <p>The state of <code>STARTING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully online. The values of <code>START_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
     */
    startServer(req: operations.StartServerRequest, config?: AxiosRequestConfig): Promise<operations.StartServerResponse>;
    /**
     * <p>Changes the state of a file transfer protocol-enabled server from <code>ONLINE</code> to <code>OFFLINE</code>. An <code>OFFLINE</code> server cannot accept and process file transfer jobs. Information tied to your server, such as server and user properties, are not affected by stopping your server.</p> <note> <p>Stopping the server does not reduce or impact your file transfer protocol endpoint billing; you must delete the server to stop being billed.</p> </note> <p>The state of <code>STOPPING</code> indicates that the server is in an intermediate state, either not fully able to respond, or not fully offline. The values of <code>STOP_FAILED</code> can indicate an error condition.</p> <p>No response is returned from this call.</p>
     */
    stopServer(req: operations.StopServerRequest, config?: AxiosRequestConfig): Promise<operations.StopServerResponse>;
    /**
     * <p>Attaches a key-value pair to a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>There is no response returned from this call.</p>
     */
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * <p>If the <code>IdentityProviderType</code> of a file transfer protocol-enabled server is <code>AWS_DIRECTORY_SERVICE</code> or <code>API_Gateway</code>, tests whether your identity provider is set up successfully. We highly recommend that you call this operation to test your authentication method as soon as you create your server. By doing so, you can troubleshoot issues with the identity provider integration to ensure that your users can successfully use the service.</p> <p> The <code>ServerId</code> and <code>UserName</code> parameters are required. The <code>ServerProtocol</code>, <code>SourceIp</code>, and <code>UserPassword</code> are all optional. </p> <note> <p> You cannot use <code>TestIdentityProvider</code> if the <code>IdentityProviderType</code> of your server is <code>SERVICE_MANAGED</code>. </p> </note> <ul> <li> <p> If you provide any incorrect values for any parameters, the <code>Response</code> field is empty. </p> </li> <li> <p> If you provide a server ID for a server that uses service-managed users, you get an error: </p> <p> <code> An error occurred (InvalidRequestException) when calling the TestIdentityProvider operation: s-<i>server-ID</i> not configured for external auth </code> </p> </li> <li> <p> If you enter a Server ID for the <code>--server-id</code> parameter that does not identify an actual Transfer server, you receive the following error: </p> <p> <code>An error occurred (ResourceNotFoundException) when calling the TestIdentityProvider operation: Unknown server</code> </p> </li> </ul>
     */
    testIdentityProvider(req: operations.TestIdentityProviderRequest, config?: AxiosRequestConfig): Promise<operations.TestIdentityProviderResponse>;
    /**
     * <p>Detaches a key-value pair from a resource, as identified by its Amazon Resource Name (ARN). Resources are users, servers, roles, and other entities.</p> <p>No response is returned from this call.</p>
     */
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * Allows you to update parameters for the access specified in the <code>ServerID</code> and <code>ExternalID</code> parameters.
     */
    updateAccess(req: operations.UpdateAccessRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccessResponse>;
    /**
     * Updates some of the parameters for an existing agreement. Provide the <code>AgreementId</code> and the <code>ServerId</code> for the agreement that you want to update, along with the new values for the parameters to update.
     */
    updateAgreement(req: operations.UpdateAgreementRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAgreementResponse>;
    /**
     * Updates the active and inactive dates for a certificate.
     */
    updateCertificate(req: operations.UpdateCertificateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCertificateResponse>;
    /**
     * Updates some of the parameters for an existing connector. Provide the <code>ConnectorId</code> for the connector that you want to update, along with the new values for the parameters to update.
     */
    updateConnector(req: operations.UpdateConnectorRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectorResponse>;
    /**
     * Updates the description for the host key that's specified by the <code>ServerId</code> and <code>HostKeyId</code> parameters.
     */
    updateHostKey(req: operations.UpdateHostKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHostKeyResponse>;
    /**
     * Updates some of the parameters for an existing profile. Provide the <code>ProfileId</code> for the profile that you want to update, along with the new values for the parameters to update.
     */
    updateProfile(req: operations.UpdateProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
    /**
     * <p>Updates the file transfer protocol-enabled server's properties after that server has been created.</p> <p>The <code>UpdateServer</code> call returns the <code>ServerId</code> of the server you updated.</p>
     */
    updateServer(req: operations.UpdateServerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServerResponse>;
    /**
     * <p>Assigns new properties to a user. Parameters you pass modify any or all of the following: the home directory, role, and policy for the <code>UserName</code> and <code>ServerId</code> you specify.</p> <p>The response returns the <code>ServerId</code> and the <code>UserName</code> for the updated user.</p>
     */
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
}
