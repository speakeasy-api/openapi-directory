import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful DELETE on Account resource
 */
export declare class Account extends SpeakeasyBase {
    /**
     * Balance of the account
     */
    balance: number;
    /**
     * This account has been bookmarked by user
     */
    bookmarked: number;
    /**
     * Amount of coming operations not yet debited
     */
    coming?: number;
    /**
     * Name of the company holding the employee savings of the account
     */
    companyName?: string;
    /**
     * Account currency
     */
    currency?: Record<string, any>;
    /**
     * This account is not found on the website anymore
     */
    deleted?: Date;
    /**
     * This account has been deleted by user and will not be synchronized anymore
     */
    disabled?: Date;
    /**
     * Display this account in accounts list
     */
    display: boolean;
    /**
     * If the last update has failed, the error code
     */
    error?: string;
    /**
     * Account IBAN
     */
    iban?: string;
    /**
     * ID of the account
     */
    id: number;
    /**
     * ID of the related connection
     */
    idConnection?: number;
    /**
     * Id of the parent account
     */
    idParent?: number;
    /**
     * ID of the related connection source
     */
    idSource?: number;
    /**
     * ID of the account type
     */
    idType?: number;
    /**
     * ID of the related user
     */
    idUser?: number;
    /**
     * Last successful update of the account
     */
    lastUpdate?: Date;
    /**
     * Name of the account
     */
    name?: string;
    /**
     * Account number
     */
    number?: string;
    /**
     * Opening date of the account
     */
    openingDate?: Date;
    /**
     * Original name of the account on the bank
     */
    originalName: string;
    /**
     * Relationship between the credentials owner and the account
     */
    ownership?: string;
    /**
     * Account usage (if not set by the user, displays the value of original_usage)
     */
    usage?: string;
    /**
     * Account webid
     */
    webid?: string;
}
