import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBankAccountQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListBankAccountRequest extends SpeakeasyBase {
    queryParams: ListBankAccountQueryParams;
}
export declare class ListBankAccountResponse extends SpeakeasyBase {
    bankAccountList?: shared.BankAccountList;
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
