import { SpeakeasyBase } from "../../../internal/utils";
import { BatchEntryCompletionStatusEnum } from "./batchentrycompletionstatusenum";
import { BatchGetAssetPropertyValueErrorInfo } from "./batchgetassetpropertyvalueerrorinfo";
/**
 * Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.
 */
export declare class BatchGetAssetPropertyValueSkippedEntry extends SpeakeasyBase {
    completionStatus: BatchEntryCompletionStatusEnum;
    entryId: string;
    errorInfo?: BatchGetAssetPropertyValueErrorInfo;
}
