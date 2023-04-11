import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolUploadsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The type of the symbol for the current symbol upload
 */
export declare enum SymbolUploadsCreateRequestBodySymbolTypeEnum {
    Apple = "Apple",
    JavaScript = "JavaScript",
    Breakpad = "Breakpad",
    AndroidProguard = "AndroidProguard",
    Uwp = "UWP"
}
/**
 * A request containing information pertaining to starting a symbol upload process
 */
export declare class SymbolUploadsCreateRequestBody extends SpeakeasyBase {
    /**
     * The build number. Optional for Apple. Required for Android.
     */
    build?: string;
    /**
     * The callback URL that the client can optionally provide to get status updates for the current symbol upload
     */
    clientCallback?: string;
    /**
     * The file name for the symbol upload
     */
    fileName?: string;
    /**
     * The type of the symbol for the current symbol upload
     */
    symbolType: SymbolUploadsCreateRequestBodySymbolTypeEnum;
    /**
     * The version number. Optional for Apple. Required for Android.
     */
    version?: string;
}
export declare class SymbolUploadsCreateRequest extends SpeakeasyBase {
    /**
     * The symbol information
     */
    requestBody: SymbolUploadsCreateRequestBody;
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
export declare class SymbolUploadsCreate500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolUploadsCreate403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Bad request
 */
export declare class SymbolUploadsCreate400ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * A response containing information pertaining to starting a symbol upload process
 */
export declare class SymbolUploadsCreate200ApplicationJSON extends SpeakeasyBase {
    /**
     * Describes how long the upload_url is valid
     */
    expirationDate: Date;
    /**
     * The id for the current upload
     */
    symbolUploadId: string;
    /**
     * The URL where the client needs to upload the symbol blob to
     */
    uploadUrl: string;
}
export declare class SymbolUploadsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolUploadsCreate200ApplicationJSONObject?: SymbolUploadsCreate200ApplicationJSON;
    /**
     * Bad request
     */
    symbolUploadsCreate400ApplicationJSONObject?: SymbolUploadsCreate400ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolUploadsCreate403ApplicationJSONObject?: SymbolUploadsCreate403ApplicationJSON;
    /**
     * Internal error
     */
    symbolUploadsCreate500ApplicationJSONObject?: SymbolUploadsCreate500ApplicationJSON;
}
