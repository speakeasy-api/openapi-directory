import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateBankAccountResponse extends SpeakeasyBase {
    /**
     * BankAccount created successfully.
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
