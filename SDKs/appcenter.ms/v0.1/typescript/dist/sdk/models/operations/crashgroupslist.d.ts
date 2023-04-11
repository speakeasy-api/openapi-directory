import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CrashGroupsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * the OData-like $orderby argument
 */
export declare enum CrashGroupsListDollarOrderbyEnum {
    LastOccurrenceAsc = "last_occurrence asc",
    LastOccurrenceDesc = "last_occurrence desc",
    CountAsc = "count asc",
    CountDesc = "count desc",
    DisplayIdAsc = "display_id asc",
    DisplayIdDesc = "display_id desc",
    ImpactedUsersAsc = "impacted_users asc",
    ImpactedUsersDesc = "impacted_users desc"
}
export declare enum CrashGroupsListGroupStatusEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
export declare enum CrashGroupsListGroupTypeEnum {
    GroupType1 = "GroupType1",
    GroupType2 = "GroupType2"
}
export declare class CrashGroupsListRequest extends SpeakeasyBase {
    /**
     * the OData-like $orderby argument
     */
    dollarOrderby?: CrashGroupsListDollarOrderbyEnum;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * version
     */
    appVersion?: string;
    /**
     * Cassandra request continuation token. The token is used for pagination.
     */
    continuationToken?: string;
    groupStatus?: CrashGroupsListGroupStatusEnum;
    /**
     * A freetext search that matches in crash, crash types, crash stack_traces and crash user
     */
    groupTextSearch?: string;
    groupType?: CrashGroupsListGroupTypeEnum;
    /**
     * Earliest date when the last time a crash occured in a crash group
     */
    lastOccurrenceFrom?: Date;
    /**
     * Latest date when the last time a crash occured in a crash group
     */
    lastOccurrenceTo?: Date;
    /**
     * The name of the owner
     */
    ownerName: string;
}
/**
 * Error
 */
export declare class CrashGroupsListDefaultApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * programming language of the frame
 */
export declare enum CrashGroupsList200ApplicationJSONCrashGroupsReasonFrameLanguageEnum {
    JavaScript = "JavaScript",
    CSharp = "CSharp",
    ObjectiveC = "Objective-C",
    ObjectiveCpp = "Objective-Cpp",
    Cpp = "Cpp",
    C = "C",
    Swift = "Swift",
    Java = "Java",
    Unknown = "Unknown"
}
/**
 * frame belonging to the reason of the crash
 */
export declare class CrashGroupsList200ApplicationJSONCrashGroupsReasonFrame extends SpeakeasyBase {
    /**
     * this line isn't from any framework
     */
    appCode?: boolean;
    /**
     * is a class method
     */
    classMethod?: boolean;
    /**
     * name of the class
     */
    className?: string;
    /**
     * Formatted frame string
     */
    codeFormatted?: string;
    /**
     * Unformatted Frame string
     */
    codeRaw?: string;
    /**
     * Exception type.
     */
    exceptionType?: string;
    /**
     * name of the file
     */
    file?: string;
    /**
     * Name of the framework
     */
    frameworkName?: string;
    /**
     * programming language of the frame
     */
    language?: CrashGroupsList200ApplicationJSONCrashGroupsReasonFrameLanguageEnum;
    /**
     * line number
     */
    line?: number;
    /**
     * name of the method
     */
    method?: string;
    /**
     * parameters of the frames method
     */
    methodParams?: string;
    /**
     * OS exception type. (aka. SIGNAL)
     */
    osExceptionType?: string;
}
export declare enum CrashGroupsList200ApplicationJSONCrashGroupsStatusEnum {
    Open = "open",
    Closed = "closed",
    Ignored = "ignored"
}
export declare class CrashGroupsList200ApplicationJSONCrashGroups extends SpeakeasyBase {
    annotation: string;
    appVersion: string;
    build: string;
    count: number;
    crashGroupId: string;
    crashReason: string;
    displayId: string;
    exception?: string;
    /**
     * Crash or handled exception
     */
    fatal: boolean;
    firstOccurrence: Date;
    impactedUsers?: number;
    lastOccurrence: Date;
    newCrashGroupId: string;
    /**
     * frame belonging to the reason of the crash
     */
    reasonFrame?: CrashGroupsList200ApplicationJSONCrashGroupsReasonFrame;
    status: CrashGroupsList200ApplicationJSONCrashGroupsStatusEnum;
}
/**
 * Success
 */
export declare class CrashGroupsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * Cassandra request continuation token. The token is used for pagination.
     */
    continuationToken?: string;
    crashGroups: CrashGroupsList200ApplicationJSONCrashGroups[];
    limitedResultSet: boolean;
}
export declare class CrashGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    crashGroupsList200ApplicationJSONObject?: CrashGroupsList200ApplicationJSON;
    /**
     * Error
     */
    crashGroupsListDefaultApplicationJSONObject?: CrashGroupsListDefaultApplicationJSON;
}
