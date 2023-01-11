import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeOrderListRequestItem } from "./changeorderlistrequestitem";
/**
 * Contains all change order operations you want to make.  (max 100 items per call)
**/
export declare class ChangeOrderListRequest extends SpeakeasyBase {
    changeOrders: ChangeOrderListRequestItem[];
}
