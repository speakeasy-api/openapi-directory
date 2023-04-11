import { SpeakeasyBase } from "../../../internal/utils";
import { BatchGetRecordError } from "./batchgetrecorderror";
import { BatchGetRecordIdentifier } from "./batchgetrecordidentifier";
import { BatchGetRecordResultDetail } from "./batchgetrecordresultdetail";
/**
 * Success
 */
export declare class BatchGetRecordResponse extends SpeakeasyBase {
    errors: BatchGetRecordError[];
    records: BatchGetRecordResultDetail[];
    unprocessedIdentifiers: BatchGetRecordIdentifier[];
}
