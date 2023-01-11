import { SpeakeasyBase } from "../../../internal/utils";
import { BatchResponse } from "./batchresponse";
import { KeysAndAttributes } from "./keysandattributes";
export declare class BatchGetItemOutput extends SpeakeasyBase {
    responses?: Record<string, BatchResponse>;
    unprocessedKeys?: Record<string, KeysAndAttributes>;
}
