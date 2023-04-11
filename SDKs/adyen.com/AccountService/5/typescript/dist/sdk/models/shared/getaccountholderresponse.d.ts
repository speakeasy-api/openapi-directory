import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { AccountHolderDetails } from "./accountholderdetails";
import { AccountHolderStatus } from "./accountholderstatus";
import { ErrorFieldType } from "./errorfieldtype";
import { KYCVerificationResult } from "./kycverificationresult";
import { MigrationData } from "./migrationdata";
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
     * Contains field validation errors that would prevent requests from being processed.
     */
    invalidFields?: ErrorFieldType[];
    /**
     * The legal entity of the account holder.
     */
    legalEntity?: GetAccountHolderResponseLegalEntityEnum;
    migrationData?: MigrationData;
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
     * The time that shows how up to date is the information in the response.
     */
    systemUpToDateTime?: Date;
    verification?: KYCVerificationResult;
}
