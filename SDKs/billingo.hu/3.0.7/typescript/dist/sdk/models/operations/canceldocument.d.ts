import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CancelDocumentPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CancelDocumentRequest extends SpeakeasyBase {
    pathParams: CancelDocumentPathParams;
}
export declare class CancelDocumentResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    document?: shared.Document;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
