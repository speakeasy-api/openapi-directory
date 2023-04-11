import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolsGetStatusSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class SymbolsGetStatusRequest extends SpeakeasyBase {
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
export declare class SymbolsGetStatus500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Not found
 */
export declare class SymbolsGetStatus404ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolsGetStatus403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Whether the symbol is ignored.
 */
export declare enum SymbolsGetStatus200ApplicationJSONStatusEnum {
    Available = "available",
    Ignored = "ignored",
    Missing = "missing"
}
/**
 * A response containing information pertaining to a symbol status
 */
export declare class SymbolsGetStatus200ApplicationJSON extends SpeakeasyBase {
    /**
     * The application that this symbol belongs to
     */
    appId: string;
    /**
     * Whether the symbol is ignored.
     */
    status: SymbolsGetStatus200ApplicationJSONStatusEnum;
    /**
     * The unique id for this symbol (uuid)
     */
    symbolId: string;
}
export declare class SymbolsGetStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolsGetStatus200ApplicationJSONObject?: SymbolsGetStatus200ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolsGetStatus403ApplicationJSONObject?: SymbolsGetStatus403ApplicationJSON;
    /**
     * Not found
     */
    symbolsGetStatus404ApplicationJSONObject?: SymbolsGetStatus404ApplicationJSON;
    /**
     * Internal error
     */
    symbolsGetStatus500ApplicationJSONObject?: SymbolsGetStatus500ApplicationJSON;
}
