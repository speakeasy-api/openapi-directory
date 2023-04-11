import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing a shipping or billing address.
 */
export declare class EcommerceAddress extends SpeakeasyBase {
    /**
     * City of the billing address.
     */
    city?: string;
    /**
     * Company name of the customer
     */
    companyName?: string;
    /**
     * Country of the billing address.
     */
    country?: string;
    /**
     * Address line 1 of the billing address.
     */
    line1?: string;
    /**
     * Address line 2 of the billing address.
     */
    line2?: string;
    /**
     * Postal/ZIP code of the billing address.
     */
    postalCode?: string;
    /**
     * State/province of the billing address.
     */
    state?: string;
}
