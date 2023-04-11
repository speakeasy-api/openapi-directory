import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AnalyticsDistributionReleaseCountsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AnalyticsDistributionReleaseCountsRequestBodyReleases extends SpeakeasyBase {
    /**
     * Distribution group Id.
     *
     * @remarks
     *
     */
    distributionGroup?: string;
    /**
     * Release Id.
     *
     * @remarks
     *
     */
    release: string;
}
/**
 * The releases to retrieve.
 */
export declare class AnalyticsDistributionReleaseCountsRequestBody extends SpeakeasyBase {
    releases: AnalyticsDistributionReleaseCountsRequestBodyReleases[];
}
export declare class AnalyticsDistributionReleaseCountsRequest extends SpeakeasyBase {
    /**
     * The releases to retrieve.
     */
    requestBody: AnalyticsDistributionReleaseCountsRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AnalyticsDistributionReleaseCountsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class AnalyticsDistributionReleaseCountsDefaultApplicationJSONError extends SpeakeasyBase {
    code: AnalyticsDistributionReleaseCountsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason.
 */
export declare class AnalyticsDistributionReleaseCountsDefaultApplicationJSON extends SpeakeasyBase {
    error: AnalyticsDistributionReleaseCountsDefaultApplicationJSONError;
}
export declare class AnalyticsDistributionReleaseCounts200ApplicationJSONCounts extends SpeakeasyBase {
    /**
     * Distribution group queried.
     *
     * @remarks
     *
     */
    distributionGroup?: string;
    releaseId: string;
    /**
     * Total count of downloads.
     *
     * @remarks
     *
     */
    totalCount: number;
    /**
     * Count of unique downloads against user id.
     *
     * @remarks
     *
     */
    uniqueCount: number;
}
/**
 * Count of total downloads for the provided distribution release(s).
 */
export declare class AnalyticsDistributionReleaseCounts200ApplicationJSON extends SpeakeasyBase {
    counts: AnalyticsDistributionReleaseCounts200ApplicationJSONCounts[];
    total?: number;
}
export declare class AnalyticsDistributionReleaseCountsResponse extends SpeakeasyBase {
    /**
     * Count of total downloads for the provided distribution release(s).
     */
    analyticsDistributionReleaseCounts200ApplicationJSONObject?: AnalyticsDistributionReleaseCounts200ApplicationJSON;
    /**
     * Error code with reason.
     */
    analyticsDistributionReleaseCountsDefaultApplicationJSONObject?: AnalyticsDistributionReleaseCountsDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
