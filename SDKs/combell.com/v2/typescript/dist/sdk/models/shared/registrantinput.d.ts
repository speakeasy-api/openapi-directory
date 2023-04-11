import { SpeakeasyBase } from "../../../internal/utils";
import { ExtraField } from "./extrafield";
export declare class RegistrantInput extends SpeakeasyBase {
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
     * List of registrant extra fields for the domain name.
     *
     * @remarks
     * <table><tr><th>Extension</th><th>Registrant specifics</th><th>Required extra field(s)</th></tr><tr><td>.dk</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.es</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.es</td><td>is an individual</td><td>PassportNumber</td></tr><tr><td>.fr</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.it</td><td>is an individual and has country code 'IT'</td><td>CodiceFiscal</td></tr><tr><td>.it</td><td>is an individual and has not country code 'IT'</td><td>PassportNumber</td></tr><tr><td>.nu</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.nu</td><td>is an individual</td><td>PassportNumber</td></tr><tr><td>.se</td><td>is a company</td><td>CompanyNumber</td></tr><tr><td>.se</td><td>is an individual</td><td>PassportNumber</td></tr></table>
     */
    extraFields?: ExtraField[];
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
