import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The new authentication type for the <code>GraphqlApi</code> object.
 */
export declare enum UpdateGraphqlApiRequestBodyAuthenticationTypeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT",
    AwsLambda = "AWS_LAMBDA"
}
/**
 * A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.
 */
export declare class UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig extends SpeakeasyBase {
    authorizerResultTtlInSeconds?: number;
    authorizerUri?: string;
    identityValidationExpression?: string;
}
/**
 * The Amazon CloudWatch Logs configuration.
 */
export declare class UpdateGraphqlApiRequestBodyLogConfig extends SpeakeasyBase {
    cloudWatchLogsRoleArn?: string;
    excludeVerboseContent?: boolean;
    fieldLogLevel?: shared.FieldLogLevelEnum;
}
/**
 * Describes an OpenID Connect (OIDC) configuration.
 */
export declare class UpdateGraphqlApiRequestBodyOpenIDConnectConfig extends SpeakeasyBase {
    authTTL?: number;
    clientId?: string;
    iatTTL?: number;
    issuer?: string;
}
/**
 * Describes an Amazon Cognito user pool configuration.
 */
export declare class UpdateGraphqlApiRequestBodyUserPoolConfig extends SpeakeasyBase {
    appIdClientRegex?: string;
    awsRegion?: string;
    defaultAction?: shared.DefaultActionEnum;
    userPoolId?: string;
}
export declare class UpdateGraphqlApiRequestBody extends SpeakeasyBase {
    /**
     * A list of additional authentication providers for the <code>GraphqlApi</code> API.
     */
    additionalAuthenticationProviders?: shared.AdditionalAuthenticationProvider[];
    /**
     * The new authentication type for the <code>GraphqlApi</code> object.
     */
    authenticationType?: UpdateGraphqlApiRequestBodyAuthenticationTypeEnum;
    /**
     * A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.
     */
    lambdaAuthorizerConfig?: UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig;
    /**
     * The Amazon CloudWatch Logs configuration.
     */
    logConfig?: UpdateGraphqlApiRequestBodyLogConfig;
    /**
     * The new name for the <code>GraphqlApi</code> object.
     */
    name: string;
    /**
     * Describes an OpenID Connect (OIDC) configuration.
     */
    openIDConnectConfig?: UpdateGraphqlApiRequestBodyOpenIDConnectConfig;
    /**
     * Describes an Amazon Cognito user pool configuration.
     */
    userPoolConfig?: UpdateGraphqlApiRequestBodyUserPoolConfig;
    /**
     * A flag indicating whether to use X-Ray tracing for the <code>GraphqlApi</code>.
     */
    xrayEnabled?: boolean;
}
export declare class UpdateGraphqlApiRequest extends SpeakeasyBase {
    requestBody: UpdateGraphqlApiRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API ID.
     */
    apiId: string;
}
export declare class UpdateGraphqlApiResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
    /**
     * Success
     */
    updateGraphqlApiResponse?: shared.UpdateGraphqlApiResponse;
}
