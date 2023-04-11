import { SpeakeasyBase } from "../../../internal/utils";
import { CalculateRouteSummary } from "./calculateroutesummary";
import { Leg } from "./leg";
/**
 * Returns the result of the route calculation. Metadata includes legs and route summary.
 */
export declare class CalculateRouteResponse extends SpeakeasyBase {
    legs: Leg[];
    summary: CalculateRouteSummary;
}
