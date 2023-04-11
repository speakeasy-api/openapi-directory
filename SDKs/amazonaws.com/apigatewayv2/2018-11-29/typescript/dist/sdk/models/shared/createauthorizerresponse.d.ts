import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
 */
export declare enum CreateAuthorizerResponseAuthorizerTypeEnum {
    Request = "REQUEST",
    Jwt = "JWT"
}
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
 */
export declare class CreateAuthorizerResponseJwtConfiguration extends SpeakeasyBase {
    audience?: string[];
    issuer?: string;
}
/**
 * Success
 */
export declare class CreateAuthorizerResponse extends SpeakeasyBase {
    authorizerCredentialsArn?: string;
    authorizerId?: string;
    authorizerPayloadFormatVersion?: string;
    authorizerResultTtlInSeconds?: number;
    authorizerType?: CreateAuthorizerResponseAuthorizerTypeEnum;
    authorizerUri?: string;
    enableSimpleResponses?: boolean;
    identitySource?: string[];
    identityValidationExpression?: string;
    jwtConfiguration?: CreateAuthorizerResponseJwtConfiguration;
    name?: string;
}
