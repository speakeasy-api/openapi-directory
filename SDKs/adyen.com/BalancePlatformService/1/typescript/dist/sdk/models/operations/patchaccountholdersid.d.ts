import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchAccountHoldersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchAccountHoldersIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class PatchAccountHoldersIdRequest extends SpeakeasyBase {
    pathParams: PatchAccountHoldersIdPathParams;
    request?: any;
    security: PatchAccountHoldersIdSecurity;
}
export declare class PatchAccountHoldersIdResponse extends SpeakeasyBase {
    accountHolder?: any;
    contentType: string;
    restServiceError?: any;
    statusCode: number;
}
