import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRouteResponseRequestBody extends SpeakeasyBase {
    /**
     * An expression used to extract information at runtime. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for more information.
     */
    modelSelectionExpression?: string;
    /**
     * The route models.
     */
    responseModels?: Record<string, string>;
    /**
     * The route parameters.
     */
    responseParameters?: Record<string, shared.ParameterConstraints>;
    /**
     * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions">Selection Expressions</a> for a list of expressions and each expression's associated selection key type.
     */
    routeResponseKey?: string;
}
export declare class UpdateRouteResponseRequest extends SpeakeasyBase {
    requestBody: UpdateRouteResponseRequestBody;
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
    /**
     * The route response ID.
     */
    routeResponseId: string;
}
export declare class UpdateRouteResponseResponse extends SpeakeasyBase {
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
    updateRouteResponseResponse?: shared.UpdateRouteResponseResponse;
}
