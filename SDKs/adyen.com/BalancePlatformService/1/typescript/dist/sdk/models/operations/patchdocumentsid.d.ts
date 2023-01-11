import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchDocumentsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchDocumentsIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PatchDocumentsIdRequest extends SpeakeasyBase {
    pathParams: PatchDocumentsIdPathParams;
    request?: any;
    security: PatchDocumentsIdSecurity;
}
export declare class PatchDocumentsIdResponse extends SpeakeasyBase {
    contentType: string;
    document?: any;
    serviceError?: any;
    statusCode: number;
}
