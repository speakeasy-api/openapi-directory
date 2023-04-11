import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
 */
export declare enum UpdateAuthorizerResponseAuthorizerTypeEnum {
    Request = "REQUEST",
    Jwt = "JWT"
}
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
 */
export declare class UpdateAuthorizerResponseJwtConfiguration extends SpeakeasyBase {
    audience?: string[];
    issuer?: string;
}
/**
 * Success
 */
export declare class UpdateAuthorizerResponse extends SpeakeasyBase {
    authorizerCredentialsArn?: string;
    authorizerId?: string;
    authorizerPayloadFormatVersion?: string;
    authorizerResultTtlInSeconds?: number;
    authorizerType?: UpdateAuthorizerResponseAuthorizerTypeEnum;
    authorizerUri?: string;
    enableSimpleResponses?: boolean;
    identitySource?: string[];
    identityValidationExpression?: string;
    jwtConfiguration?: UpdateAuthorizerResponseJwtConfiguration;
    name?: string;
}
