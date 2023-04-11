import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class SymbolsGetRequest extends SpeakeasyBase {
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
export declare class SymbolsGet500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Not found
 */
export declare class SymbolsGet404ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolsGet403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * The origin of the symbol file
 */
export declare enum SymbolsGet200ApplicationJSONOriginEnum {
    System = "System",
    User = "User"
}
/**
 * Whether the symbol is ignored.
 */
export declare enum SymbolsGet200ApplicationJSONStatusEnum {
    Available = "available",
    Ignored = "ignored"
}
/**
 * The type of the symbol for the current symbol upload
 */
export declare enum SymbolsGet200ApplicationJSONTypeEnum {
    Apple = "Apple",
    JavaScript = "JavaScript",
    Breakpad = "Breakpad",
    AndroidProguard = "AndroidProguard",
    Uwp = "UWP"
}
/**
 * Success
 */
export declare class SymbolsGet200ApplicationJSON extends SpeakeasyBase {
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
    origin: SymbolsGet200ApplicationJSONOriginEnum;
    /**
     * The platform that this symbol is associated with
     */
    platform: string;
    /**
     * Whether the symbol is ignored.
     */
    status: SymbolsGet200ApplicationJSONStatusEnum;
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
    type: SymbolsGet200ApplicationJSONTypeEnum;
    /**
     * The path name of the symbol file in blob storage
     */
    url: string;
    /**
     * The version number. Optional for Apple. Required for Android.
     */
    version?: string;
}
export declare class SymbolsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolsGet200ApplicationJSONObject?: SymbolsGet200ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolsGet403ApplicationJSONObject?: SymbolsGet403ApplicationJSON;
    /**
     * Not found
     */
    symbolsGet404ApplicationJSONObject?: SymbolsGet404ApplicationJSON;
    /**
     * Internal error
     */
    symbolsGet500ApplicationJSONObject?: SymbolsGet500ApplicationJSON;
}
