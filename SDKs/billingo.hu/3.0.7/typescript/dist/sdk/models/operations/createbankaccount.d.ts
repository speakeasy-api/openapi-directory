import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateBankAccountRequest extends SpeakeasyBase {
    request: shared.BankAccountInput;
}
export declare class CreateBankAccountResponse extends SpeakeasyBase {
    bankAccount?: shared.BankAccount;
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
