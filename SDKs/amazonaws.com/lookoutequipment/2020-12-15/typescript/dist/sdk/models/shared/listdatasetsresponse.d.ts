import { SpeakeasyBase } from "../../../internal/utils";
import { DatasetSummary } from "./datasetsummary";
/**
 * Success
 */
export declare class ListDatasetsResponse extends SpeakeasyBase {
    datasetSummaries?: DatasetSummary[];
    nextToken?: string;
}
