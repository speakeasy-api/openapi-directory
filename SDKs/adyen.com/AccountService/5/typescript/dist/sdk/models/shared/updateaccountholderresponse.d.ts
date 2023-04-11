import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHolderDetails } from "./accountholderdetails";
import { AccountHolderStatus } from "./accountholderstatus";
import { ErrorFieldType } from "./errorfieldtype";
import { KYCVerificationResult } from "./kycverificationresult";
/**
 * The legal entity of the account holder.
 */
export declare enum UpdateAccountHolderResponseLegalEntityEnum {
    Business = "Business",
    Individual = "Individual",
    NonProfit = "NonProfit"
}
/**
 * OK - the request has succeeded.
 */
export declare class UpdateAccountHolderResponse extends SpeakeasyBase {
    /**
     * The code of the account holder.
     */
    accountHolderCode?: string;
    accountHolderDetails?: AccountHolderDetails;
    accountHolderStatus?: AccountHolderStatus;
    /**
     * The description of the account holder.
     */
    description?: string;
    /**
     * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * The legal entity of the account holder.
     */
    legalEntity?: UpdateAccountHolderResponseLegalEntityEnum;
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
    verification?: KYCVerificationResult;
}
