import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDocumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDocumentsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetDocumentsIdRequest extends SpeakeasyBase {
    pathParams: GetDocumentsIdPathParams;
    security: GetDocumentsIdSecurity;
}
export declare class GetDocumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    document?: any;
    serviceError?: any;
    statusCode: number;
}
