import { SpeakeasyBase } from "../../../internal/utils";
import { CalculateRouteMatrixSummary } from "./calculateroutematrixsummary";
import { RouteMatrixEntry } from "./routematrixentry";
/**
 * Returns the result of the route matrix calculation.
 */
export declare class CalculateRouteMatrixResponse extends SpeakeasyBase {
    routeMatrix: RouteMatrixEntry[][];
    snappedDeparturePositions?: number[][];
    snappedDestinationPositions?: number[][];
    summary: CalculateRouteMatrixSummary;
}
