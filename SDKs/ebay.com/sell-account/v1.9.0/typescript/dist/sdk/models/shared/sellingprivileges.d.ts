import { SpeakeasyBase } from "../../../internal/utils";
import { SellingLimit } from "./sellinglimit";
/**
 * This type is used by the base response of the <b>getPrivileges</b> method.
 */
export declare class SellingPrivileges extends SpeakeasyBase {
    /**
     * If this field is returned as <code>true</code>, the seller's registration is completed. If this field is returned as <code>false</code>, the registration process is not complete.
     */
    sellerRegistrationCompleted?: boolean;
    /**
     * Type used by the <b>sellingLimit</b> container, a container that lists the monthly cap for the quantity of items sold and total sales amount allowed for the seller's account.
     */
    sellingLimit?: SellingLimit;
}
