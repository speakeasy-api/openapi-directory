import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolsIgnoreSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class SymbolsIgnoreRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the symbol (uuid of the symbol)
     */
    symbolId: string;
}
/**
 * Internal error
 */
export declare class SymbolsIgnore500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Not found
 */
export declare class SymbolsIgnore404ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolsIgnore403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * The origin of the symbol file
 */
export declare enum SymbolsIgnore200ApplicationJSONOriginEnum {
    System = "System",
    User = "User"
}
/**
 * Whether the symbol is ignored.
 */
export declare enum SymbolsIgnore200ApplicationJSONStatusEnum {
    Available = "available",
    Ignored = "ignored"
}
/**
 * The type of the symbol for the current symbol upload
 */
export declare enum SymbolsIgnore200ApplicationJSONTypeEnum {
    Apple = "Apple",
    JavaScript = "JavaScript",
    Breakpad = "Breakpad",
    AndroidProguard = "AndroidProguard",
    Uwp = "UWP"
}
/**
 * Success
 */
export declare class SymbolsIgnore200ApplicationJSON extends SpeakeasyBase {
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
    origin: SymbolsIgnore200ApplicationJSONOriginEnum;
    /**
     * The platform that this symbol is associated with
     */
    platform: string;
    /**
     * Whether the symbol is ignored.
     */
    status: SymbolsIgnore200ApplicationJSONStatusEnum;
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
    type: SymbolsIgnore200ApplicationJSONTypeEnum;
    /**
     * The path name of the symbol file in blob storage
     */
    url: string;
    /**
     * The version number. Optional for Apple. Required for Android.
     */
    version?: string;
}
export declare class SymbolsIgnoreResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolsIgnore200ApplicationJSONObject?: SymbolsIgnore200ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolsIgnore403ApplicationJSONObject?: SymbolsIgnore403ApplicationJSON;
    /**
     * Not found
     */
    symbolsIgnore404ApplicationJSONObject?: SymbolsIgnore404ApplicationJSON;
    /**
     * Internal error
     */
    symbolsIgnore500ApplicationJSONObject?: SymbolsIgnore500ApplicationJSON;
}
