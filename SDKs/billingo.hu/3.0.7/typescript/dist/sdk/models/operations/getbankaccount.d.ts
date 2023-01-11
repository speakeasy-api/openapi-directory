import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBankAccountPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetBankAccountRequest extends SpeakeasyBase {
    pathParams: GetBankAccountPathParams;
}
export declare class GetBankAccountResponse extends SpeakeasyBase {
    bankAccount?: shared.BankAccount;
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
