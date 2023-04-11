import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
/**
 * Success
 */
export declare class UpdateRouteResponseResponse extends SpeakeasyBase {
    modelSelectionExpression?: string;
    responseModels?: Record<string, string>;
    responseParameters?: Record<string, ParameterConstraints>;
    routeResponseId?: string;
    routeResponseKey?: string;
}
