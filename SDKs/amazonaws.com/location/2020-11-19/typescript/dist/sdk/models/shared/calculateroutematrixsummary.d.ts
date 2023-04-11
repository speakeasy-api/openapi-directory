import { SpeakeasyBase } from "../../../internal/utils";
import { DistanceUnitEnum } from "./distanceunitenum";
/**
 * A summary of the calculated route matrix.
 */
export declare class CalculateRouteMatrixSummary extends SpeakeasyBase {
    dataSource: string;
    distanceUnit: DistanceUnitEnum;
    errorCount: number;
    routeCount: number;
}
