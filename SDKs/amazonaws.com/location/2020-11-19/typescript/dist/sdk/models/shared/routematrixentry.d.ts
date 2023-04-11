import { SpeakeasyBase } from "../../../internal/utils";
import { RouteMatrixEntryError } from "./routematrixentryerror";
/**
 * The result for the calculated route of one <code>DeparturePosition</code> <code>DestinationPosition</code> pair.
 */
export declare class RouteMatrixEntry extends SpeakeasyBase {
    distance?: number;
    durationSeconds?: number;
    error?: RouteMatrixEntryError;
}
