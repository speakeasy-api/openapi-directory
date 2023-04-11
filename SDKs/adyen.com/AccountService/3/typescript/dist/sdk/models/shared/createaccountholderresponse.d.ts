import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHolderDetails } from "./accountholderdetails";
import { AccountHolderStatus } from "./accountholderstatus";
import { ErrorFieldType } from "./errorfieldtype";
import { KYCVerificationResult } from "./kycverificationresult";
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
     * A list of fields that caused the `/createAccountHolder` request to fail.
     */
    invalidFields?: ErrorFieldType[];
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
