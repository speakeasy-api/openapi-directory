import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDocumentFromProformaPathParams extends SpeakeasyBase {
    id: number;
}
export declare class CreateDocumentFromProformaRequest extends SpeakeasyBase {
    pathParams: CreateDocumentFromProformaPathParams;
}
export declare class CreateDocumentFromProformaResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    document?: shared.Document;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
