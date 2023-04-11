import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyValueErrorEntry } from "./batchgetassetpropertyvalueerrorentry";
import { BatchGetAssetPropertyValueSkippedEntry } from "./batchgetassetpropertyvalueskippedentry";
import { BatchGetAssetPropertyValueSuccessEntry } from "./batchgetassetpropertyvaluesuccessentry";
/**
 * Success
 */
export declare class BatchGetAssetPropertyValueResponse extends SpeakeasyBase {
    errorEntries: BatchGetAssetPropertyValueErrorEntry[];
    nextToken?: string;
    skippedEntries: BatchGetAssetPropertyValueSkippedEntry[];
    successEntries: BatchGetAssetPropertyValueSuccessEntry[];
}
