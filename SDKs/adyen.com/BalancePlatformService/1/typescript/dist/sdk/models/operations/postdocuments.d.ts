import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostDocumentsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostDocumentsRequest extends SpeakeasyBase {
    request?: any;
    security: PostDocumentsSecurity;
}
export declare class PostDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    document?: any;
    serviceError?: any;
    statusCode: number;
}
