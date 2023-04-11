import { SpeakeasyBase } from "../../../internal/utils";
import { OrderIdentifier } from "./orderidentifier";
/**
 * Contains the order identifier and the change order request
 */
export declare class ChangeOrderListRequestItemV2 extends SpeakeasyBase {
    /**
     * All properties with the prefix order_ are translated in the list of values /user/lov#OrderMetaInfoPosted
     */
    changeOrderRequest?: Record<string, string>;
    order: OrderIdentifier;
}
