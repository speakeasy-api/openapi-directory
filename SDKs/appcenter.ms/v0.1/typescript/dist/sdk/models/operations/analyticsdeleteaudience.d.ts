import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsDeleteAudienceSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsDeleteAudienceRequest extends SpeakeasyBase {
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
export declare enum AnalyticsDeleteAudienceDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsDeleteAudienceDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsDeleteAudienceDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class AnalyticsDeleteAudienceDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsDeleteAudienceDefaultApplicationJSONError;
}
export declare class AnalyticsDeleteAudienceResponse extends SpeakeasyBase {
    /**
     * Error code with reason
     */
    analyticsDeleteAudienceDefaultApplicationJSONObject?: AnalyticsDeleteAudienceDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
