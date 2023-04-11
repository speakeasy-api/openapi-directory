import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemResponse } from "./itemresponse";
/**
 * Success
 */
export declare class ExecuteTransactionOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    responses?: ItemResponse[];
}
