import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { AccountHolderDetails } from "./accountholderdetails";
import { AccountHolderStatus } from "./accountholderstatus";
import { KYCVerificationResult } from "./kycverificationresult";
/**
 * The legal entity of the account holder.
 */
export declare enum GetAccountHolderResponseLegalEntityEnum {
    Business = "Business",
    Individual = "Individual",
    NonProfit = "NonProfit"
}
/**
 * OK - the request has succeeded.
 */
export declare class GetAccountHolderResponse extends SpeakeasyBase {
    /**
     * The code of the account holder.
     */
    accountHolderCode?: string;
    accountHolderDetails?: AccountHolderDetails;
    accountHolderStatus?: AccountHolderStatus;
    /**
     * A list of the accounts under the account holder.
     */
    accounts?: Account[];
    /**
     * The description of the account holder.
     */
    description?: string;
    /**
     * The legal entity of the account holder.
     */
    legalEntity?: GetAccountHolderResponseLegalEntityEnum;
    /**
     * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
     */
    primaryCurrency?: string;
    /**
     * The reference of a request. Can be used to uniquely identify the request.
     */
    pspReference?: string;
    /**
     * The result code.
     */
    resultCode?: string;
    /**
     * Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:
     *
     * @remarks
     * * **true**: The request is queued and will be executed when the providing service is available in the order in which the requests are received.
     * * **false**: The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
     */
    submittedAsync?: boolean;
    verification?: KYCVerificationResult;
}
