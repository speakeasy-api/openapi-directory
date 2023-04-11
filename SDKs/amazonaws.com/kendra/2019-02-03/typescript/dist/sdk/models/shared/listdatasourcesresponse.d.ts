import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceSummary } from "./datasourcesummary";
/**
 * Success
 */
export declare class ListDataSourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    summaryItems?: DataSourceSummary[];
}
