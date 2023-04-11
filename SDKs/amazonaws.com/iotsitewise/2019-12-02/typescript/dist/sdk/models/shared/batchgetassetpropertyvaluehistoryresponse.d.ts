import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetAssetPropertyValueHistoryErrorEntry } from "./batchgetassetpropertyvaluehistoryerrorentry";
import { BatchGetAssetPropertyValueHistorySkippedEntry } from "./batchgetassetpropertyvaluehistoryskippedentry";
import { BatchGetAssetPropertyValueHistorySuccessEntry } from "./batchgetassetpropertyvaluehistorysuccessentry";
/**
 * Success
 */
export declare class BatchGetAssetPropertyValueHistoryResponse extends SpeakeasyBase {
    errorEntries: BatchGetAssetPropertyValueHistoryErrorEntry[];
    nextToken?: string;
    skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntry[];
    successEntries: BatchGetAssetPropertyValueHistorySuccessEntry[];
}
