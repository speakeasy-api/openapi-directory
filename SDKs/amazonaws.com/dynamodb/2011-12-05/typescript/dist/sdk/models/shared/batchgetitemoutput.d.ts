import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResponse } from "./batchresponse";
import { KeysAndAttributes } from "./keysandattributes";
/**
 * Success
 */
export declare class BatchGetItemOutput extends SpeakeasyBase {
    /**
     * Table names and the respective item attributes from the tables.
     */
    responses?: Record<string, BatchResponse>;
    unprocessedKeys?: Record<string, KeysAndAttributes>;
}
