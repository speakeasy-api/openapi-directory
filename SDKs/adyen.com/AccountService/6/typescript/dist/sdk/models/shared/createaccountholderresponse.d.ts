import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHolderDetails } from "./accountholderdetails";
import { AccountHolderStatus } from "./accountholderstatus";
import { ErrorFieldType } from "./errorfieldtype";
import { KYCVerificationResult } from "./kycverificationresult";
/**
 * The type of legal entity of the new account holder.
 */
export declare enum CreateAccountHolderResponseLegalEntityEnum {
    Business = "Business",
    Individual = "Individual",
    NonProfit = "NonProfit",
    Partnership = "Partnership",
    PublicCompany = "PublicCompany"
}
/**
 * OK - the request has succeeded.
 */
export declare class CreateAccountHolderResponse extends SpeakeasyBase {
    /**
     * The code of a new account created for the account holder.
     */
    accountCode?: string;
    /**
     * The code of the new account holder.
     */
    accountHolderCode?: string;
    accountHolderDetails?: AccountHolderDetails;
    accountHolderStatus?: AccountHolderStatus;
    /**
     * The description of the new account holder.
     */
    description?: string;
    /**
     * A list of fields that caused the `/createAccountHolder` request to fail.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * The type of legal entity of the new account holder.
     */
    legalEntity?: CreateAccountHolderResponseLegalEntityEnum;
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
    /**
     * The identifier of the profile that applies to this entity.
     */
    verificationProfile?: string;
}
