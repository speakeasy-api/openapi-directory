import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { PhoneNumber } from "./phonenumber";
/**
 * This type contains shipping and contact information for a buyer or an eBay shipping partner.
 */
export declare class ExtendedContact extends SpeakeasyBase {
    /**
     * The company name associated with the buyer or eBay shipping partner. This field is only returned if defined/applicable to the buyer or eBay shipping partner.
     */
    companyName?: string;
    /**
     * This type contains the details of a geographical address.
     */
    contactAddress?: Address;
    /**
     * This field contains the email address of the buyer. This address will be returned for up to 14 days from order creation. If an order is more than 14 days old, no address is returned.<br><br><span class="tablenote"> <strong>Note:</strong> If returned, this field contains the email address of the buyer, even for Global Shipping Program shipments. For any order that is more than 90 days old, the email that is returned will be masked. For example, j****@******.**m</span>
     */
    email?: string;
    /**
     * The full name of the buyer or eBay shipping partner.<br><br><span class="tablenote"><strong>Note:</strong> The <b>fullName</b> that is returned will be masked for any order that is more than 90 days old. For example, J******************h.</span>
     */
    fullName?: string;
    /**
     * This type contains a string field representing a telephone number.
     */
    primaryPhone?: PhoneNumber;
}
