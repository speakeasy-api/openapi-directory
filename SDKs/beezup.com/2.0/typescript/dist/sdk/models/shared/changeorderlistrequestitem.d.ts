import { SpeakeasyBase } from "../../../internal/utils";
import { OrderIdentifierWithETag } from "./orderidentifierwithetag";
/**
 * Contains the order identifier and the change order request
**/
export declare class ChangeOrderListRequestItem extends SpeakeasyBase {
    changeOrderRequest?: Record<string, string>;
    order: OrderIdentifierWithETag;
}
