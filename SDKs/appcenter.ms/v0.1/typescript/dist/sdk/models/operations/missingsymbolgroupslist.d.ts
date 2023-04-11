import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MissingSymbolGroupsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class MissingSymbolGroupsListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * top N elements
     */
    top: number;
}
/**
 * failure response object
 */
export declare class MissingSymbolGroupsListDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    message: string;
}
/**
 * symbol status
 */
export declare enum MissingSymbolGroupsList200ApplicationJSONGroupsMissingSymbolsStatusEnum {
    Missing = "missing",
    Ignored = "ignored",
    Available = "available"
}
/**
 * missing symbol
 */
export declare class MissingSymbolGroupsList200ApplicationJSONGroupsMissingSymbols extends SpeakeasyBase {
    /**
     * symbol name
     */
    name: string;
    /**
     * symbol plarform
     */
    platform?: string;
    /**
     * symbol status
     */
    status: MissingSymbolGroupsList200ApplicationJSONGroupsMissingSymbolsStatusEnum;
    /**
     * symbol id
     */
    symbolId: string;
}
/**
 * group status
 */
export declare enum MissingSymbolGroupsList200ApplicationJSONGroupsStatusEnum {
    Active = "active",
    Pending = "pending",
    Closed = "closed"
}
/**
 * missing symbol crash group object
 */
export declare class MissingSymbolGroupsList200ApplicationJSONGroups extends SpeakeasyBase {
    /**
     * application build
     */
    appBuild: string;
    /**
     * application id
     */
    appId: string;
    /**
     * application version
     */
    appVer: string;
    /**
     * number of crashes that belong to this group
     */
    crashCount?: number;
    /**
     * number of errors that belong to this group
     */
    errorCount?: number;
    /**
     * last update date for the group
     */
    lastModified: Date;
    /**
     * list of missing symbols
     */
    missingSymbols: MissingSymbolGroupsList200ApplicationJSONGroupsMissingSymbols[];
    /**
     * group status
     */
    status: MissingSymbolGroupsList200ApplicationJSONGroupsStatusEnum;
    /**
     * id of the symbol group
     */
    symbolGroupId: string;
}
/**
 * grouped by missing symbols crashes response object
 */
export declare class MissingSymbolGroupsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * list of crash groups formed by missing symbols combination
     */
    groups: MissingSymbolGroupsList200ApplicationJSONGroups[];
    /**
     * total number of crashes for all the groups
     */
    totalCrashCount: number;
}
export declare class MissingSymbolGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    missingSymbolGroupsList200ApplicationJSONObject?: MissingSymbolGroupsList200ApplicationJSON;
    /**
     * Error
     */
    missingSymbolGroupsListDefaultApplicationJSONObject?: MissingSymbolGroupsListDefaultApplicationJSON;
}
