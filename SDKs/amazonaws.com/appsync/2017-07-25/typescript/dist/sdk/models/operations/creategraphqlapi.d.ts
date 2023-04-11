import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
 */
export declare enum CreateGraphqlApiRequestBodyAuthenticationTypeEnum {
    ApiKey = "API_KEY",
    AwsIam = "AWS_IAM",
    AmazonCognitoUserPools = "AMAZON_COGNITO_USER_POOLS",
    OpenidConnect = "OPENID_CONNECT",
    AwsLambda = "AWS_LAMBDA"
}
/**
 * A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.
 */
export declare class CreateGraphqlApiRequestBodyLambdaAuthorizerConfig extends SpeakeasyBase {
    authorizerResultTtlInSeconds?: number;
    authorizerUri?: string;
    identityValidationExpression?: string;
}
/**
 * The Amazon CloudWatch Logs configuration.
 */
export declare class CreateGraphqlApiRequestBodyLogConfig extends SpeakeasyBase {
    cloudWatchLogsRoleArn?: string;
    excludeVerboseContent?: boolean;
    fieldLogLevel?: shared.FieldLogLevelEnum;
}
/**
 * Describes an OpenID Connect (OIDC) configuration.
 */
export declare class CreateGraphqlApiRequestBodyOpenIDConnectConfig extends SpeakeasyBase {
    authTTL?: number;
    clientId?: string;
    iatTTL?: number;
    issuer?: string;
}
/**
 * Describes an Amazon Cognito user pool configuration.
 */
export declare class CreateGraphqlApiRequestBodyUserPoolConfig extends SpeakeasyBase {
    appIdClientRegex?: string;
    awsRegion?: string;
    defaultAction?: shared.DefaultActionEnum;
    userPoolId?: string;
}
export declare class CreateGraphqlApiRequestBody extends SpeakeasyBase {
    /**
     * A list of additional authentication providers for the <code>GraphqlApi</code> API.
     */
    additionalAuthenticationProviders?: shared.AdditionalAuthenticationProvider[];
    /**
     * The authentication type: API key, Identity and Access Management (IAM), OpenID Connect (OIDC), Amazon Cognito user pools, or Lambda.
     */
    authenticationType: CreateGraphqlApiRequestBodyAuthenticationTypeEnum;
    /**
     * A <code>LambdaAuthorizerConfig</code> specifies how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API can have only one Lambda authorizer configured at a time.
     */
    lambdaAuthorizerConfig?: CreateGraphqlApiRequestBodyLambdaAuthorizerConfig;
    /**
     * The Amazon CloudWatch Logs configuration.
     */
    logConfig?: CreateGraphqlApiRequestBodyLogConfig;
    /**
     * A user-supplied name for the <code>GraphqlApi</code>.
     */
    name: string;
    /**
     * Describes an OpenID Connect (OIDC) configuration.
     */
    openIDConnectConfig?: CreateGraphqlApiRequestBodyOpenIDConnectConfig;
    /**
     * A map with keys of <code>TagKey</code> objects and values of <code>TagValue</code> objects.
     */
    tags?: Record<string, string>;
    /**
     * Describes an Amazon Cognito user pool configuration.
     */
    userPoolConfig?: CreateGraphqlApiRequestBodyUserPoolConfig;
    /**
     * A flag indicating whether to use X-Ray tracing for the <code>GraphqlApi</code>.
     */
    xrayEnabled?: boolean;
}
export declare class CreateGraphqlApiRequest extends SpeakeasyBase {
    requestBody: CreateGraphqlApiRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateGraphqlApiResponse extends SpeakeasyBase {
    /**
     * ApiLimitExceededException
     */
    apiLimitExceededException?: any;
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
     * Success
     */
    createGraphqlApiResponse?: shared.CreateGraphqlApiResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnauthorizedException
     */
    unauthorizedException?: any;
}
