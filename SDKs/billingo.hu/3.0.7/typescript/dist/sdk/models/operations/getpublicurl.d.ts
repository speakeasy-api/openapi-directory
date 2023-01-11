import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicUrlPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPublicUrlRequest extends SpeakeasyBase {
    pathParams: GetPublicUrlPathParams;
}
export declare class GetPublicUrlResponse extends SpeakeasyBase {
    clientErrorResponse?: shared.ClientErrorResponse;
    contentType: string;
    documentPublicUrl?: shared.DocumentPublicUrl;
    headers: Record<string, string[]>;
    serverErrorResponse?: shared.ServerErrorResponse;
    statusCode: number;
    validationErrorResponse?: shared.ValidationErrorResponse;
}
