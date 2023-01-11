import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBankAccountPathParams extends SpeakeasyBase {
    id: number;
}
export declare class UpdateBankAccountRequest extends SpeakeasyBase {
    pathParams: UpdateBankAccountPathParams;
    request: shared.BankAccountInput;
}
export declare class UpdateBankAccountResponse extends SpeakeasyBase {
    bankAccount?: shared.BankAccount;
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
