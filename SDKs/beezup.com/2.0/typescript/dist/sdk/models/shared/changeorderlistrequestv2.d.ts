import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeOrderListRequestItemV2 } from "./changeorderlistrequestitemv2";
/**
 * Contains all change order operations you want to make.  (max 100 items per call)
**/
export declare class ChangeOrderListRequestV2 extends SpeakeasyBase {
    changeOrders: ChangeOrderListRequestItemV2[];
}
