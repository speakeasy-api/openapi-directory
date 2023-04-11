import { SpeakeasyBase } from "../../../internal/utils";
import { Counts } from "./counts";
/**
 * Success
 */
export declare class ListCoverageStatisticsResponse extends SpeakeasyBase {
    countsByGroup?: Counts[];
    nextToken?: string;
    totalCounts: number;
}
