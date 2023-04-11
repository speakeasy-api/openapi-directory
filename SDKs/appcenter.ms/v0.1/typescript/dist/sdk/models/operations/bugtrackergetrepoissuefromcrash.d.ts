import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BugTrackerGetRepoIssueFromCrashSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BugTrackerGetRepoIssueFromCrashRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * CrashGroup Id
     */
    crashGroupId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * The status code return by the API. It can be 400 or 404 or 409 or 500.
 */
export declare enum BugTrackerGetRepoIssueFromCrashDefaultApplicationJSONCodeEnum {
    FourHundred = "400",
    FourHundredAndFour = "404",
    FourHundredAndNine = "409",
    FiveHundred = "500"
}
/**
 * Generic result for any alerting API operation
 */
export declare class BugTrackerGetRepoIssueFromCrashDefaultApplicationJSON extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 404 or 409 or 500.
     */
    code: BugTrackerGetRepoIssueFromCrashDefaultApplicationJSONCodeEnum;
    /**
     * The reason for the request failed
     */
    message?: string;
    /**
     * Unique request identifier for tracking
     */
    requestId: string;
}
export declare enum BugTrackerGetRepoIssueFromCrash200ApplicationJSONBugTrackerTypeEnum {
    Github = "github",
    Vsts = "vsts",
    Jira = "jira"
}
/**
 * Object returned in response to getting a bug tracker issue related to a crash group id
 */
export declare class BugTrackerGetRepoIssueFromCrash200ApplicationJSON extends SpeakeasyBase {
    bugTrackerType?: BugTrackerGetRepoIssueFromCrash200ApplicationJSONBugTrackerTypeEnum;
    eventType?: string;
    id?: string;
    mobileCenterId?: string;
    repoName?: string;
    title?: string;
    url?: string;
}
export declare class BugTrackerGetRepoIssueFromCrashResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bugTrackerGetRepoIssueFromCrash200ApplicationJSONObject?: BugTrackerGetRepoIssueFromCrash200ApplicationJSON;
    /**
     * Error code with reason
     */
    bugTrackerGetRepoIssueFromCrashDefaultApplicationJSONObject?: BugTrackerGetRepoIssueFromCrashDefaultApplicationJSON;
}
