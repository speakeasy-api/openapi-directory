import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExportOrderListFormatEnum } from "./exportorderlistformatenum";
import { OrderListRequestWithoutPagination } from "./orderlistrequestwithoutpagination";



// ExportOrderListRequest
/** 
 * The message request to export order list. The store identifier is requested to regroup the exportations.
**/
export class ExportOrderListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: ExportOrderListFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=orderListRequestWithoutPagination" })
  orderListRequestWithoutPagination: OrderListRequestWithoutPagination;

  @SpeakeasyMetadata({ data: "json, name=storeId" })
  storeId: string;
}
