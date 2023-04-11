import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BuildsListBranchesSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BuildsListBranchesRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Bad Request
 */
export declare class BuildsListBranchesDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    id: string;
    message: string;
}
export declare class BuildsListBranches200ApplicationJSONLastBuild extends SpeakeasyBase {
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
/**
 * The branch build status
 */
export declare class BuildsListBranches200ApplicationJSON extends SpeakeasyBase {
    configured: boolean;
    lastBuild?: BuildsListBranches200ApplicationJSONLastBuild;
}
export declare class BuildsListBranchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    buildsListBranches200ApplicationJSONObjects?: BuildsListBranches200ApplicationJSON[];
    /**
     * Bad Request
     */
    buildsListBranchesDefaultApplicationJSONObject?: BuildsListBranchesDefaultApplicationJSON;
}
