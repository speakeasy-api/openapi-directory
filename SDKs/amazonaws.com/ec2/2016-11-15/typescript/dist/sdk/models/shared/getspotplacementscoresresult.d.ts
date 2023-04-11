import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Spot placement score for this Region or Availability Zone. The score is calculated based on the assumption that the <code>capacity-optimized</code> allocation strategy is used and that all of the Availability Zones in the Region can be used.
 */
export declare class GetSpotPlacementScoresResultSpotPlacementScores extends SpeakeasyBase {
    availabilityZoneId?: string;
    region?: string;
    score?: number;
}
/**
 * Success
 */
export declare class GetSpotPlacementScoresResult extends SpeakeasyBase {
    nextToken?: string;
    spotPlacementScores?: GetSpotPlacementScoresResultSpotPlacementScores[];
}
