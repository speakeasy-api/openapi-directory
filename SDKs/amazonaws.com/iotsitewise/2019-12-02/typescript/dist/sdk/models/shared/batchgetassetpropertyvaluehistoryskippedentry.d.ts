import { SpeakeasyBase } from "../../../internal/utils";
import { BatchEntryCompletionStatusEnum } from "./batchentrycompletionstatusenum";
import { BatchGetAssetPropertyValueHistoryErrorInfo } from "./batchgetassetpropertyvaluehistoryerrorinfo";
/**
 * Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> request.
 */
export declare class BatchGetAssetPropertyValueHistorySkippedEntry extends SpeakeasyBase {
    completionStatus: BatchEntryCompletionStatusEnum;
    entryId: string;
    errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo;
}
