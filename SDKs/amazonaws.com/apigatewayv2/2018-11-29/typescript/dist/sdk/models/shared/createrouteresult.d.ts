import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
export declare class CreateRouteResult extends SpeakeasyBase {
    apiGatewayManaged?: Record<string, any>;
    apiKeyRequired?: Record<string, any>;
    authorizationScopes?: Record<string, any>;
    authorizationType?: Record<string, any>;
    authorizerId?: Record<string, any>;
    modelSelectionExpression?: Record<string, any>;
    operationName?: Record<string, any>;
    requestModels?: Record<string, string>;
    requestParameters?: Record<string, ParameterConstraints>;
    routeId?: Record<string, any>;
    routeKey?: Record<string, any>;
    routeResponseSelectionExpression?: Record<string, any>;
    target?: Record<string, any>;
}
