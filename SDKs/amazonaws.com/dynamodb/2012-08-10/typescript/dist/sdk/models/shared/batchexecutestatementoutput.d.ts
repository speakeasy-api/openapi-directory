import { SpeakeasyBase } from "../../../internal/utils";
import { BatchStatementResponse } from "./batchstatementresponse";
import { ConsumedCapacity } from "./consumedcapacity";
/**
 * Success
 */
export declare class BatchExecuteStatementOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    responses?: BatchStatementResponse[];
}
