import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
**/
export declare class GetAuthorizerResponseJwtConfiguration extends SpeakeasyBase {
    audience?: Record<string, any>;
    issuer?: Record<string, any>;
}
export declare class GetAuthorizerResponse extends SpeakeasyBase {
    authorizerCredentialsArn?: Record<string, any>;
    authorizerId?: Record<string, any>;
    authorizerPayloadFormatVersion?: Record<string, any>;
    authorizerResultTtlInSeconds?: Record<string, any>;
    authorizerType?: Record<string, any>;
    authorizerUri?: Record<string, any>;
    enableSimpleResponses?: Record<string, any>;
    identitySource?: Record<string, any>;
    identityValidationExpression?: Record<string, any>;
    jwtConfiguration?: GetAuthorizerResponseJwtConfiguration;
    name?: Record<string, any>;
}
