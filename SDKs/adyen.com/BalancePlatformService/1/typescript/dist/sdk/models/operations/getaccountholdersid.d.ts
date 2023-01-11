import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountHoldersIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAccountHoldersIdSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetAccountHoldersIdRequest extends SpeakeasyBase {
    pathParams: GetAccountHoldersIdPathParams;
    security: GetAccountHoldersIdSecurity;
}
export declare class GetAccountHoldersIdResponse extends SpeakeasyBase {
    accountHolder?: any;
    contentType: string;
    restServiceError?: any;
    statusCode: number;
}
