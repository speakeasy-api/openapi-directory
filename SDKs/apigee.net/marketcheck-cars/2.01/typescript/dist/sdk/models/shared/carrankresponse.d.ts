import { SpeakeasyBase } from "../../../internal/utils";
import { CarListingRank } from "./carlistingrank";
/**
 * Ranking query response
 */
export declare class CarRankResponse extends SpeakeasyBase {
    /**
     * The number of listings ranked
     */
    numRanked?: number;
    rankedListings?: CarListingRank[];
}
