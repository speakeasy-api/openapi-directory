import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
 */
export declare enum UpdateAuthorizerRequestBodyAuthorizerTypeEnum {
    Request = "REQUEST",
    Jwt = "JWT"
}
/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
 */
export declare class UpdateAuthorizerRequestBodyJwtConfiguration extends SpeakeasyBase {
    audience?: string[];
    issuer?: string;
}
export declare class UpdateAuthorizerRequestBody extends SpeakeasyBase {
    /**
     * Represents an Amazon Resource Name (ARN).
     */
    authorizerCredentialsArn?: string;
    /**
     * A string with a length between [1-64].
     */
    authorizerPayloadFormatVersion?: string;
    /**
     * An integer with a value between [0-3600].
     */
    authorizerResultTtlInSeconds?: number;
    /**
     * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
     */
    authorizerType?: UpdateAuthorizerRequestBodyAuthorizerTypeEnum;
    /**
     * A string representation of a URI with a length between [1-2048].
     */
    authorizerUri?: string;
    /**
     * Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html">Working with AWS Lambda authorizers for HTTP APIs</a>
     */
    enableSimpleResponses?: boolean;
    /**
     * The identity source for which authorization is requested. For the REQUEST authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an Auth header, a Name query string parameter are defined as identity sources, this value is $method.request.header.Auth, $method.request.querystring.Name. These parameters will be used to derive the authorization caching key and to perform runtime validation of the REQUEST authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
     */
    identitySource?: string[];
    /**
     * A string with a length between [0-1024].
     */
    identityValidationExpression?: string;
    /**
     * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
     */
    jwtConfiguration?: UpdateAuthorizerRequestBodyJwtConfiguration;
    /**
     * A string with a length between [1-128].
     */
    name?: string;
}
export declare class UpdateAuthorizerRequest extends SpeakeasyBase {
    requestBody: UpdateAuthorizerRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The API identifier.
     */
    apiId: string;
    /**
     * The authorizer identifier.
     */
    authorizerId: string;
}
export declare class UpdateAuthorizerResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateAuthorizerResponse?: shared.UpdateAuthorizerResponse;
}
