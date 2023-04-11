import { SpeakeasyBase } from "../../../internal/utils";
import { ParameterConstraints } from "./parameterconstraints";
/**
 * Represents a route response.
 */
export declare class RouteResponse extends SpeakeasyBase {
    modelSelectionExpression?: string;
    responseModels?: Record<string, string>;
    responseParameters?: Record<string, ParameterConstraints>;
    routeResponseId?: string;
    routeResponseKey: string;
}
