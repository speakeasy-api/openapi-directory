import { SpeakeasyBase } from "../../../internal/utils";
export declare class CompanyInfo extends SpeakeasyBase {
    /**
     * Your company accounting emails
     */
    accountingEmails?: string[];
    /**
     * Your address
     */
    address: string;
    /**
     * Your address city
     */
    city: string;
    /**
     * Your company name
     */
    company: string;
    /**
     * The country iso code alpha 3 <a href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3">(ISO 3166-1_alpha-3)</a>
     */
    countryIsoCodeAlpha3: string;
    /**
     * Your address postal code
     */
    postalCode: string;
    /**
     * Your company VATNumber. Used for french company. This number is checked with official web service before being saved.
     */
    vatNumber?: string;
}
