import { SpeakeasyBase } from "../../../internal/utils";
export declare class Registrant extends SpeakeasyBase {
    /**
     * Address of the registrant.
     */
    address?: string;
    /**
     * City of the registrant.
     */
    city?: string;
    /**
     * Company name of the registrant.<br />
     *
     * @remarks
     * The registrant is a company if not empty, otherwise the registrant is an individual when validating extra fields.
     */
    companyName?: string;
    /**
     * Country code of the registrant.
     *
     * @remarks
     * Syntax: 'BE', 'NL, 'FR', ...
     */
    countryCode?: string;
    /**
     * Email of the registrant.
     */
    email?: string;
    /**
     * Enterprise number of the registrant.<br />
     *
     * @remarks
     * Syntax: 'BE0123456789'
     */
    enterpriseNumber?: string;
    /**
     * Fax of the registrant.
     *
     * @remarks
     * Syntax: '+32.123456789'
     */
    fax?: string;
    /**
     * First name of the registrant.
     */
    firstName?: string;
    /**
     * Language code of the registrant.
     *
     * @remarks
     * Syntax: 'nl', 'fr', 'en', 'de', ...
     */
    languageCode?: string;
    /**
     * Last name of the registrant.
     */
    lastName?: string;
    /**
     * Phone of the registrant.<br />
     *
     * @remarks
     * Syntax: '+32.123456789'
     */
    phone?: string;
    /**
     * Postal code of the registrant.
     */
    postalCode?: string;
}
