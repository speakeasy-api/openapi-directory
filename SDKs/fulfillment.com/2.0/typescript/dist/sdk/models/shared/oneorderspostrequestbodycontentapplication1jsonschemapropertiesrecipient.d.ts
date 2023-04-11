import { SpeakeasyBase } from "../../../internal/utils";
export declare class OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient extends SpeakeasyBase {
    /**
     * Address Line 1
     */
    address1: string;
    /**
     * Address Line 2
     */
    address2?: string;
    /**
     * City
     */
    addressLocality: string;
    /**
     * Province / State
     */
    addressRegion: string;
    companyName?: string;
    /**
     * Country, for best results please provide the two character ISO code
     */
    country: string;
    /**
     * Email, required for international shipments
     */
    email: string;
    firstName: string;
    lastName: string;
    /**
     * Phone number, required for international shipments
     */
    phone: string;
    /**
     * Postal Code / Zip
     */
    postalCode?: string;
}
