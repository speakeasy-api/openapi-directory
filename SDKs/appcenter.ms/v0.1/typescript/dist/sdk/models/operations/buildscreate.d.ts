import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Parameters of the build
 */
export declare class BuildsCreateRequestBody extends SpeakeasyBase {
    /**
     * Run build in debug mode
     */
    debug?: boolean;
    /**
     * Version to build which represents the full Git commit reference
     */
    sourceVersion?: string;
}
export declare class BuildsCreateRequest extends SpeakeasyBase {
    /**
     * Parameters of the build
     */
    requestBody?: BuildsCreateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The branch name
     */
    branch: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Created build(s)
 */
export declare class BuildsCreate200ApplicationJSON extends SpeakeasyBase {
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
export declare class BuildsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created build(s)
     */
    buildsCreate200ApplicationJSONObject?: BuildsCreate200ApplicationJSON;
}
