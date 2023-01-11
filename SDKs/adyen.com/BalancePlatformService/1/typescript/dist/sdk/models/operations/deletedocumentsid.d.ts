import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDocumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteDocumentsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class DeleteDocumentsIdRequest extends SpeakeasyBase {
    pathParams: DeleteDocumentsIdPathParams;
    security: DeleteDocumentsIdSecurity;
}
export declare class DeleteDocumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: any;
    statusCode: number;
    voidResponse?: any;
}
