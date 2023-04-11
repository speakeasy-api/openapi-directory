import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsAudienceNameExistsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsAudienceNameExistsRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the audience
     */
    audienceName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AnalyticsAudienceNameExistsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsAudienceNameExistsDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsAudienceNameExistsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsAudienceNameExistsDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsAudienceNameExistsDefaultApplicationJSONError;
}
export declare class AnalyticsAudienceNameExistsResponse extends SpeakeasyBase {
    /**
     * Error code with reason
     */
    analyticsAudienceNameExistsDefaultApplicationJSONObject?: AnalyticsAudienceNameExistsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
