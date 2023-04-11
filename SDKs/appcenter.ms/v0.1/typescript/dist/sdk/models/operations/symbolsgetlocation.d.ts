import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolsGetLocationSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class SymbolsGetLocationRequest extends SpeakeasyBase {
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
export declare class SymbolsGetLocation500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Not found
 */
export declare class SymbolsGetLocation404ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolsGetLocation403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Location for downloading symbol
 */
export declare class SymbolsGetLocation200ApplicationJSON extends SpeakeasyBase {
    uri: string;
}
export declare class SymbolsGetLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolsGetLocation200ApplicationJSONObject?: SymbolsGetLocation200ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolsGetLocation403ApplicationJSONObject?: SymbolsGetLocation403ApplicationJSON;
    /**
     * Not found
     */
    symbolsGetLocation404ApplicationJSONObject?: SymbolsGetLocation404ApplicationJSON;
    /**
     * Internal error
     */
    symbolsGetLocation500ApplicationJSONObject?: SymbolsGetLocation500ApplicationJSON;
}
