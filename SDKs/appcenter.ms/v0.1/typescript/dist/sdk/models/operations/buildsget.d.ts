import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BuildsGetRequest extends SpeakeasyBase {
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
export declare class BuildsGet200ApplicationJSON extends SpeakeasyBase {
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
export declare class BuildsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsGet200ApplicationJSONObject?: BuildsGet200ApplicationJSON;
}
