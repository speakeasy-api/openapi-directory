import { SpeakeasyBase } from "../../../internal/utils";
import { ExportOrderListFormatEnum } from "./exportorderlistformatenum";
import { OrderListRequestWithoutPagination } from "./orderlistrequestwithoutpagination";
/**
 * The message request to export order list. The store identifier is requested to regroup the exportations.
**/
export declare class ExportOrderListRequest extends SpeakeasyBase {
    format?: ExportOrderListFormatEnum;
    orderListRequestWithoutPagination: OrderListRequestWithoutPagination;
    storeId: string;
}
