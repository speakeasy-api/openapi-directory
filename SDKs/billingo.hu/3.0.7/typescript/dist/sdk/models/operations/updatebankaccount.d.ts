import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateBankAccountRequest extends SpeakeasyBase {
    /**
     * Bank account object that you would like to update.
     */
    bankAccountInput: shared.BankAccountInput;
    id: number;
}
export declare class UpdateBankAccountResponse extends SpeakeasyBase {
    /**
     * Bank account updated successfully.
     */
    bankAccount?: shared.BankAccount;
    /**
     * The request is malformed.
     */
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Internal server error.
     */
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation errors occured.
     */
    validationErrorResponse?: shared.ValidationErrorResponse;
}
