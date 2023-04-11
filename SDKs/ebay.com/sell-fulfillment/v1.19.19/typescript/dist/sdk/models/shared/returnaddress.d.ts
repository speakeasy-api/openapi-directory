import { SpeakeasyBase } from "../../../internal/utils";
import { Phone } from "./phone";
/**
 * This type is used by the payment dispute methods, and is relevant if the buyer will be returning the item to the seller.
 */
export declare class ReturnAddress extends SpeakeasyBase {
    /**
     * The first line of the street address.
     */
    addressLine1?: string;
    /**
     * The second line of the street address. This line is not always necessarily, but is often used for apartment number or suite number, or other relevant information that can not fit on the first line.
     */
    addressLine2?: string;
    /**
     * The city of the return address.
     */
    city?: string;
    /**
     * The country's two-digt, ISO 3166-1 country code. See the enumeration type for a country's value. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/fulfillment/types/ba:CountryCodeEnum'>eBay API documentation</a>
     */
    country?: string;
    /**
     * The county of the return address. Counties are not applicable to all countries.
     */
    county?: string;
    /**
     * The full name of return address owner.
     */
    fullName?: string;
    /**
     * The postal code of the return address.
     */
    postalCode?: string;
    /**
     * This type is used by the <strong>returnAddress</strong field that is used by the payment dispute methods. If a buyer is returning the item (under payment dispute) to the seller, a primary phone number for the seller must be provided.
     */
    primaryPhone?: Phone;
    /**
     * The state or province of the return address.
     */
    stateOrProvince?: string;
}
