import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBankAccountPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteBankAccountRequest extends SpeakeasyBase {
    pathParams: DeleteBankAccountPathParams;
}
export declare class DeleteBankAccountResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
}
