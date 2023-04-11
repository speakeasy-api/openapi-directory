import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistibutionReleasesInstallAnalyticsRequestBodyReleases extends SpeakeasyBase {
    /**
     * distribution group id
     */
    distributionGroupId: string;
    /**
     * release id
     */
    releaseId: number;
    /**
     * user id
     */
    userId: string;
}
/**
 * The install analytics request payload
 */
export declare class DistibutionReleasesInstallAnalyticsRequestBody extends SpeakeasyBase {
    releases?: DistibutionReleasesInstallAnalyticsRequestBodyReleases[];
}
export declare class DistibutionReleasesInstallAnalyticsRequest extends SpeakeasyBase {
    /**
     * The install analytics request payload
     */
    requestBody: DistibutionReleasesInstallAnalyticsRequestBody;
    /**
     * The name of the app
     */
    appName: string;
    /**
     * The name of the app owner
     */
    ownerName: string;
}
export declare class DistibutionReleasesInstallAnalyticsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
