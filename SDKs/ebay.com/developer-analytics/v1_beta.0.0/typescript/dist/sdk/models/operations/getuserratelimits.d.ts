import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserRateLimitsQueryParams extends SpeakeasyBase {
    apiContext?: string;
    apiName?: string;
}
export declare class GetUserRateLimitsSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetUserRateLimits500ApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorT[];
}
export declare class GetUserRateLimitsRequest extends SpeakeasyBase {
    queryParams: GetUserRateLimitsQueryParams;
    security: GetUserRateLimitsSecurity;
}
export declare class GetUserRateLimitsResponse extends SpeakeasyBase {
    contentType: string;
    rateLimitsResponse?: shared.RateLimitsResponse;
    statusCode: number;
    getUserRateLimits500ApplicationJSONObject?: GetUserRateLimits500ApplicationJson;
}
