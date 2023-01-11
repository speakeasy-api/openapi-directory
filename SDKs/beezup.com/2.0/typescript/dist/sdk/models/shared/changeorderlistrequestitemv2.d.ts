import { SpeakeasyBase } from "../../../internal/utils";
import { OrderIdentifier } from "./orderidentifier";
/**
 * Contains the order identifier and the change order request
**/
export declare class ChangeOrderListRequestItemV2 extends SpeakeasyBase {
    changeOrderRequest?: Record<string, string>;
    order: OrderIdentifier;
}
