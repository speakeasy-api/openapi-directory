import { SpeakeasyBase } from "../../../internal/utils";
import { OrderOperationResponse } from "./orderoperationresponse";
/**
 * The response given by the batch operation
 */
export declare class BatchOrderOperationResponse extends SpeakeasyBase {
    operations: OrderOperationResponse[];
}
