import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
export declare class GetRouteResponseResponse extends SpeakeasyBase {
    modelSelectionExpression?: Record<string, any>;
    responseModels?: Record<string, string>;
    responseParameters?: Record<string, ParameterConstraints>;
    routeResponseId?: Record<string, any>;
    routeResponseKey?: Record<string, any>;
}
