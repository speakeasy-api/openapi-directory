import { SpeakeasyBase } from "../../../internal/utils";
import { TimeSeriesSummary } from "./timeseriessummary";
/**
 * Success
 */
export declare class ListTimeSeriesResponse extends SpeakeasyBase {
    timeSeriesSummaries: TimeSeriesSummary[];
    nextToken?: string;
}
