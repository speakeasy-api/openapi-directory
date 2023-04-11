import { SpeakeasyBase } from "../../../internal/utils";
import { BatchEntryCompletionStatusEnum } from "./batchentrycompletionstatusenum";
import { BatchGetAssetPropertyAggregatesErrorInfo } from "./batchgetassetpropertyaggregateserrorinfo";
/**
 * Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> request.
 */
export declare class BatchGetAssetPropertyAggregatesSkippedEntry extends SpeakeasyBase {
    completionStatus: BatchEntryCompletionStatusEnum;
    entryId: string;
    errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo;
}
