import { SpeakeasyBase } from "../../../internal/utils";
import { DataSetSummary } from "./datasetsummary";
/**
 * Success
 */
export declare class ListDataSetsResponse extends SpeakeasyBase {
    dataSets: DataSetSummary[];
    nextToken?: string;
}
