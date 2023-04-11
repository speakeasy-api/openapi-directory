import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The build status; used to cancel builds
 */
export declare enum BuildsUpdateRequestBodyStatusEnum {
    Cancelling = "cancelling"
}
export declare class BuildsUpdateRequestBody extends SpeakeasyBase {
    /**
     * The build status; used to cancel builds
     */
    status?: BuildsUpdateRequestBodyStatusEnum;
}
export declare class BuildsUpdateRequest extends SpeakeasyBase {
    requestBody: BuildsUpdateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The build ID
     */
    buildId: number;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Success
 */
export declare class BuildsUpdate200ApplicationJSON extends SpeakeasyBase {
    /**
     * The build number
     */
    buildNumber: string;
    /**
     * The time the build was finished
     */
    finishTime?: string;
    /**
     * The build ID
     */
    id: number;
    /**
     * The time the build status was last changed
     */
    lastChangedDate?: string;
    /**
     * The time the build was queued
     */
    queueTime: string;
    /**
     * The build result
     */
    result: string;
    /**
     * The source branch name
     */
    sourceBranch: string;
    /**
     * The source SHA
     */
    sourceVersion: string;
    /**
     * The time the build was started
     */
    startTime?: string;
    /**
     * The build status
     */
    status: string;
}
export declare class BuildsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsUpdate200ApplicationJSONObject?: BuildsUpdate200ApplicationJSON;
}
