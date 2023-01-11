import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDocumentBlockQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ListDocumentBlockRequest extends SpeakeasyBase {
    queryParams: ListDocumentBlockQueryParams;
}
export declare class ListDocumentBlockResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    documentBlockList?: shared.DocumentBlockList;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
