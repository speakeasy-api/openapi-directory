import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendDocumentPathParams extends SpeakeasyBase {
    id: number;
}
export declare class SendDocumentRequest extends SpeakeasyBase {
    pathParams: SendDocumentPathParams;
    request?: shared.SendDocument;
}
export declare class SendDocumentResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    headers: Record<string, string[]>;
    sendDocument?: shared.SendDocument;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
