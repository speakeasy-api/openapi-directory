import { SpeakeasyBase } from "../../../internal/utils";
import { FleetSummary } from "./fleetsummary";
/**
 * Success
 */
export declare class ListFleetsResponse extends SpeakeasyBase {
    fleetSummaryList?: FleetSummary[];
    nextToken?: string;
}
