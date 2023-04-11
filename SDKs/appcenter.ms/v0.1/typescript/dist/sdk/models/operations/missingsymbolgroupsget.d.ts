import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MissingSymbolGroupsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class MissingSymbolGroupsGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * missing symbol crash group id
     */
    symbolGroupId: string;
}
/**
 * failure response object
 */
export declare class MissingSymbolGroupsGetDefaultApplicationJSON extends SpeakeasyBase {
    code: string;
    message: string;
}
/**
 * symbol status
 */
export declare enum MissingSymbolGroupsGet200ApplicationJSONGroupsMissingSymbolsStatusEnum {
    Missing = "missing",
    Ignored = "ignored",
    Available = "available"
}
/**
 * missing symbol
 */
export declare class MissingSymbolGroupsGet200ApplicationJSONGroupsMissingSymbols extends SpeakeasyBase {
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
    status: MissingSymbolGroupsGet200ApplicationJSONGroupsMissingSymbolsStatusEnum;
    /**
     * symbol id
     */
    symbolId: string;
}
/**
 * group status
 */
export declare enum MissingSymbolGroupsGet200ApplicationJSONGroupsStatusEnum {
    Active = "active",
    Pending = "pending",
    Closed = "closed"
}
/**
 * missing symbol crash group object
 */
export declare class MissingSymbolGroupsGet200ApplicationJSONGroups extends SpeakeasyBase {
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
    missingSymbols: MissingSymbolGroupsGet200ApplicationJSONGroupsMissingSymbols[];
    /**
     * group status
     */
    status: MissingSymbolGroupsGet200ApplicationJSONGroupsStatusEnum;
    /**
     * id of the symbol group
     */
    symbolGroupId: string;
}
/**
 * grouped by missing symbols crashes response object
 */
export declare class MissingSymbolGroupsGet200ApplicationJSON extends SpeakeasyBase {
    /**
     * list of crash groups formed by missing symbols combination
     */
    groups: MissingSymbolGroupsGet200ApplicationJSONGroups[];
    /**
     * total number of crashes for all the groups
     */
    totalCrashCount: number;
}
export declare class MissingSymbolGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    missingSymbolGroupsGet200ApplicationJSONObject?: MissingSymbolGroupsGet200ApplicationJSON;
    /**
     * Error
     */
    missingSymbolGroupsGetDefaultApplicationJSONObject?: MissingSymbolGroupsGetDefaultApplicationJSON;
}
