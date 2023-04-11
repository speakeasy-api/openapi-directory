import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalClientEmailApiModel } from "./additionalclientemailapimodel";
/**
 * OK
 */
export declare class ClientDetailsApiModel extends SpeakeasyBase {
    /**
     * Client additional emails contact for CC
     */
    additionalEmails?: AdditionalClientEmailApiModel[];
    /**
     * Client business address
     */
    address?: string;
    /**
     * Indicates the country where the clients is from
     */
    clientCountryId?: number;
    /**
     * Indicates the default system currency used by the user for the client
     */
    clientCurrencyId?: number;
    /**
     * Client's Company Registration Number
     */
    companyRegistrationNumber?: string;
    /**
     * Date of creation
     */
    createdOn?: Date;
    /**
     * Client custom payment terms
     */
    defaultDueDateInDays?: number;
    /**
     * Client email
     */
    email?: string;
    /**
     * Entity id
     */
    id?: number;
    /**
     * Name of the client
     */
    name?: string;
    /**
     * Client phone numer
     */
    phoneNumber?: string;
    /**
     * Hold a value of the language in which the invoice will be sent
     */
    uiLanguageId?: number;
    /**
     * Client's VAT number
     */
    vat?: string;
}
