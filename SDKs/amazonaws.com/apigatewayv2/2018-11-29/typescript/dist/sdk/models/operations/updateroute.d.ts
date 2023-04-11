import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
 */
export declare enum UpdateRouteRequestBodyAuthorizationTypeEnum {
    None = "NONE",
    AwsIam = "AWS_IAM",
    Custom = "CUSTOM",
    Jwt = "JWT"
}
export declare class UpdateRouteRequestBody extends SpeakeasyBase {
    /**
     * Specifies whether an API key is required for the route. Supported only for WebSocket APIs.
     */
    apiKeyRequired?: boolean;
    /**
     * A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
     */
    authorizationScopes?: string[];
    /**
     * The authorization type. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer. For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
     */
    authorizationType?: UpdateRouteRequestBodyAuthorizationTypeEnum;
    /**
     * The identifier.
     */
    authorizerId?: string;
    /**
     * An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
     */
    modelSelectionExpression?: string;
    /**
     * A string with a length between [1-64].
     */
    operationName?: string;
    /**
     * The route models.
     */
    requestModels?: Record<string, string>;
    /**
     * The route parameters.
     */
    requestParameters?: Record<string, shared.ParameterConstraints>;
    /**
     * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
     */
    routeKey?: string;
    /**
     * An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
     */
    routeResponseSelectionExpression?: string;
    /**
     * A string with a length between [1-128].
     */
    target?: string;
}
export declare class UpdateRouteRequest extends SpeakeasyBase {
    requestBody: UpdateRouteRequestBody;
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
     * The route ID.
     */
    routeId: string;
}
export declare class UpdateRouteResponse extends SpeakeasyBase {
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
    updateRouteResult?: shared.UpdateRouteResult;
}
