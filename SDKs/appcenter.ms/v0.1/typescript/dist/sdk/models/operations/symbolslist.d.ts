import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class SymbolsListRequest extends SpeakeasyBase {
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
 * Internal error
 */
export declare class SymbolsList500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolsList403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * The origin of the symbol file
 */
export declare enum SymbolsList200ApplicationJSONOriginEnum {
    System = "System",
    User = "User"
}
/**
 * Whether the symbol is ignored.
 */
export declare enum SymbolsList200ApplicationJSONStatusEnum {
    Available = "available",
    Ignored = "ignored"
}
/**
 * The type of the symbol for the current symbol upload
 */
export declare enum SymbolsList200ApplicationJSONTypeEnum {
    Apple = "Apple",
    JavaScript = "JavaScript",
    Breakpad = "Breakpad",
    AndroidProguard = "AndroidProguard",
    Uwp = "UWP"
}
export declare class SymbolsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * The other symbols in the same file
     */
    alternateSymbolIds: string[];
    /**
     * The application that this symbol belongs to
     */
    appId: string;
    /**
     * The build number. Optional for Apple. Required for Android.
     */
    build?: string;
    /**
     * The origin of the symbol file
     */
    origin: SymbolsList200ApplicationJSONOriginEnum;
    /**
     * The platform that this symbol is associated with
     */
    platform: string;
    /**
     * Whether the symbol is ignored.
     */
    status: SymbolsList200ApplicationJSONStatusEnum;
    /**
     * The unique id for this symbol (uuid)
     */
    symbolId: string;
    /**
     * The id of the symbol upload this symbol belongs to.
     */
    symbolUploadId: string;
    /**
     * The type of the symbol for the current symbol upload
     */
    type: SymbolsList200ApplicationJSONTypeEnum;
    /**
     * The path name of the symbol file in blob storage
     */
    url: string;
    /**
     * The version number. Optional for Apple. Required for Android.
     */
    version?: string;
}
export declare class SymbolsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolsList200ApplicationJSONObjects?: SymbolsList200ApplicationJSON[];
    /**
     * Unauthorized
     */
    symbolsList403ApplicationJSONObject?: SymbolsList403ApplicationJSON;
    /**
     * Internal error
     */
    symbolsList500ApplicationJSONObject?: SymbolsList500ApplicationJSON;
}
