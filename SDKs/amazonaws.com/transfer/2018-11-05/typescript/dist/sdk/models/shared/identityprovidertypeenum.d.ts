/**
 * Returns information related to the type of user authentication that is in use for a file transfer protocol-enabled server's users. For <code>AWS_DIRECTORY_SERVICE</code> or <code>SERVICE_MANAGED</code> authentication, the Secure Shell (SSH) public keys are stored with a user on the server instance. For <code>API_GATEWAY</code> authentication, your custom authentication method is implemented by using an API call. The server can have only one method of authentication.
 */
export declare enum IdentityProviderTypeEnum {
    ServiceManaged = "SERVICE_MANAGED",
    ApiGateway = "API_GATEWAY",
    AwsDirectoryService = "AWS_DIRECTORY_SERVICE",
    AwsLambda = "AWS_LAMBDA"
}
