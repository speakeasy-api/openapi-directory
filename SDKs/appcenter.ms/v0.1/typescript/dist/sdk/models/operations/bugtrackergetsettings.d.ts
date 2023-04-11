import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BugtrackerGetSettingsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class BugtrackerGetSettingsRequest extends SpeakeasyBase {
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
 * The status code return by the API. It can be 400 or 404 or 409 or 500.
 */
export declare enum BugtrackerGetSettingsDefaultApplicationJSONCodeEnum {
    FourHundred = "400",
    FourHundredAndFour = "404",
    FourHundredAndNine = "409",
    FiveHundred = "500"
}
/**
 * Generic result for any alerting API operation
 */
export declare class BugtrackerGetSettingsDefaultApplicationJSON extends SpeakeasyBase {
    /**
     * The status code return by the API. It can be 400 or 404 or 409 or 500.
     */
    code: BugtrackerGetSettingsDefaultApplicationJSONCodeEnum;
    /**
     * The reason for the request failed
     */
    message?: string;
    /**
     * Unique request identifier for tracking
     */
    requestId: string;
}
/**
 * Alerting EventTypes enum
 */
export declare enum BugtrackerGetSettings200ApplicationJSONEventTypesEnum {
    NewCrashGroupCreated = "newCrashGroupCreated",
    NewAppReleased = "newAppReleased"
}
/**
 * type of bugtracker
 */
export declare enum BugtrackerGetSettings200ApplicationJSONSettingsTypeEnum {
    Github = "github",
    Vsts = "vsts",
    Jira = "jira"
}
/**
 * Bugtracker specific settings
 */
export declare class BugtrackerGetSettings200ApplicationJSONSettings extends SpeakeasyBase {
    callbackUrl?: string;
    ownerName: string;
    /**
     * type of bugtracker
     */
    type: BugtrackerGetSettings200ApplicationJSONSettingsTypeEnum;
}
/**
 * bugtracker state
 */
export declare enum BugtrackerGetSettings200ApplicationJSONStateEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Unauthorized = "unauthorized"
}
/**
 * type of bugtracker
 */
export declare enum BugtrackerGetSettings200ApplicationJSONTypeEnum {
    Github = "github",
    Vsts = "vsts",
    Jira = "jira"
}
/**
 * Alerting bugtracker resource
 */
export declare class BugtrackerGetSettings200ApplicationJSON extends SpeakeasyBase {
    /**
     * Event types enabled for bugtracker
     */
    eventTypes?: BugtrackerGetSettings200ApplicationJSONEventTypesEnum[];
    /**
     * Bugtracker specific settings
     */
    settings?: BugtrackerGetSettings200ApplicationJSONSettings;
    /**
     * bugtracker state
     */
    state?: BugtrackerGetSettings200ApplicationJSONStateEnum;
    /**
     * ID of OAuth token
     */
    tokenId?: string;
    /**
     * type of bugtracker
     */
    type?: BugtrackerGetSettings200ApplicationJSONTypeEnum;
}
export declare class BugtrackerGetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    bugtrackerGetSettings200ApplicationJSONObject?: BugtrackerGetSettings200ApplicationJSON;
    /**
     * Error code with reason
     */
    bugtrackerGetSettingsDefaultApplicationJSONObject?: BugtrackerGetSettingsDefaultApplicationJSON;
}
