import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetDocumentRequest extends SpeakeasyBase {
    pathParams: GetDocumentPathParams;
}
export declare class GetDocumentResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    document?: shared.Document;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
