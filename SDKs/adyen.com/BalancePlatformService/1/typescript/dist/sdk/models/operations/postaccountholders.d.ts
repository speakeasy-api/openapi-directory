import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAccountHoldersSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PostAccountHoldersRequest extends SpeakeasyBase {
    request?: any;
    security: PostAccountHoldersSecurity;
}
export declare class PostAccountHoldersResponse extends SpeakeasyBase {
    accountHolder?: any;
    contentType: string;
    restServiceError?: any;
    statusCode: number;
}
