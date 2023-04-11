import { SpeakeasyBase } from "../../../internal/utils";
import { AccountHolderDetails } from "./accountholderdetails";
import { AccountHolderStatus } from "./accountholderstatus";
import { ErrorFieldType } from "./errorfieldtype";
import { FieldType } from "./fieldtype";
import { KYCVerificationResult } from "./kycverificationresult";
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
     * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
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
    /**
     * A list of the fields updated through the request.
     */
    updatedFields?: FieldType[];
    verification?: KYCVerificationResult;
}
