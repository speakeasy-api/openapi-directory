import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderOperationResponse } from "./orderoperationresponse";



// BatchOrderOperationResponse
/** 
 * The response given by the batch operation
**/
export class BatchOrderOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operations", elemType: OrderOperationResponse })
  operations: OrderOperationResponse[];
}
