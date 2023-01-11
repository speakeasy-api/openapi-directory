import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestAccessTokenPathParams extends SpeakeasyBase {
    keyName: string;
}
export declare class RequestAccessTokenQueryParams extends SpeakeasyBase {
    format?: shared.ResponseFormatEnum;
}
export declare class RequestAccessTokenHeaders extends SpeakeasyBase {
    xAblyVersion?: string;
}
export declare class RequestAccessTokenRequest extends SpeakeasyBase {
    pathParams: RequestAccessTokenPathParams;
    queryParams: RequestAccessTokenQueryParams;
    headers: RequestAccessTokenHeaders;
    request?: any;
}
export declare class RequestAccessTokenResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    tokenDetails?: shared.TokenDetails;
}
