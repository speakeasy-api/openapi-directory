import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementSummary } from "./placementsummary";
/**
 * Success
 */
export declare class ListPlacementsResponse extends SpeakeasyBase {
    nextToken?: string;
    placements: PlacementSummary[];
}
