import { SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceSummary } from "./systeminstancesummary";
/**
 * Success
 */
export declare class SearchSystemInstancesResponse extends SpeakeasyBase {
    nextToken?: string;
    summaries?: SystemInstanceSummary[];
}
