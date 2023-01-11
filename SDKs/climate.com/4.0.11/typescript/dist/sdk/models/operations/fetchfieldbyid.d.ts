import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FetchFieldByIdPathParams extends SpeakeasyBase {
    fieldId: string;
}
export declare class FetchFieldByIdSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class FetchFieldByIdRequest extends SpeakeasyBase {
    pathParams: FetchFieldByIdPathParams;
    security: FetchFieldByIdSecurity;
}
export declare class FetchFieldByIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    field?: any;
    headers: Record<string, string[]>;
    statusCode: number;
}
