import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyAggregatesErrorEntry } from "./batchgetassetpropertyaggregateserrorentry";
import { BatchGetAssetPropertyAggregatesSkippedEntry } from "./batchgetassetpropertyaggregatesskippedentry";
import { BatchGetAssetPropertyAggregatesSuccessEntry } from "./batchgetassetpropertyaggregatessuccessentry";
/**
 * Success
 */
export declare class BatchGetAssetPropertyAggregatesResponse extends SpeakeasyBase {
    errorEntries: BatchGetAssetPropertyAggregatesErrorEntry[];
    nextToken?: string;
    skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntry[];
    successEntries: BatchGetAssetPropertyAggregatesSuccessEntry[];
}
