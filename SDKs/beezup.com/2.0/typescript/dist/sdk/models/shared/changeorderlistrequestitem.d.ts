import { SpeakeasyBase } from "../../../internal/utils";
import { OrderIdentifierWithETag } from "./orderidentifierwithetag";
/**
 * Contains the order identifier and the change order request
 */
export declare class ChangeOrderListRequestItem extends SpeakeasyBase {
    /**
     * All properties with the prefix order_ are translated in the list of values /user/lov#OrderMetaInfoPosted
     */
    changeOrderRequest?: Record<string, string>;
    order: OrderIdentifierWithETag;
}
