import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolUploadsGetLocationSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class SymbolUploadsGetLocationRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The ID of the symbol upload
     */
    symbolUploadId: string;
}
/**
 * Internal error
 */
export declare class SymbolUploadsGetLocation500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Not found
 */
export declare class SymbolUploadsGetLocation404ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolUploadsGetLocation403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Location for downloading symbol upload
 */
export declare class SymbolUploadsGetLocation200ApplicationJSON extends SpeakeasyBase {
    uri: string;
}
export declare class SymbolUploadsGetLocationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolUploadsGetLocation200ApplicationJSONObject?: SymbolUploadsGetLocation200ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolUploadsGetLocation403ApplicationJSONObject?: SymbolUploadsGetLocation403ApplicationJSON;
    /**
     * Not found
     */
    symbolUploadsGetLocation404ApplicationJSONObject?: SymbolUploadsGetLocation404ApplicationJSON;
    /**
     * Internal error
     */
    symbolUploadsGetLocation500ApplicationJSONObject?: SymbolUploadsGetLocation500ApplicationJSON;
}
