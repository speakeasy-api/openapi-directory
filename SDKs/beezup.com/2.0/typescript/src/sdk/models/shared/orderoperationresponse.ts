import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonUserErrorMessage } from "./beezupcommonusererrormessage";
import { OrderIdentifier } from "./orderidentifier";



// OrderOperationResponse
/** 
 * The response given by the batch operation for an order
**/
export class OrderOperationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: BeezUpCommonUserErrorMessage })
  errors?: BeezUpCommonUserErrorMessage[];

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: OrderIdentifier;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
