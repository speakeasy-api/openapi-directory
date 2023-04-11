import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolUploadsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class SymbolUploadsDeleteRequest extends SpeakeasyBase {
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
export declare class SymbolUploadsDelete500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Not found
 */
export declare class SymbolUploadsDelete404ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolUploadsDelete403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * The origin of the symbol upload
 */
export declare enum SymbolUploadsDelete200ApplicationJSONOriginEnum {
    User = "User",
    System = "System"
}
/**
 * The current status for the symbol upload
 */
export declare enum SymbolUploadsDelete200ApplicationJSONStatusEnum {
    Created = "created",
    Committed = "committed",
    Aborted = "aborted",
    Processing = "processing",
    Indexed = "indexed",
    Failed = "failed"
}
/**
 * The type of the symbol for the current symbol upload
 */
export declare enum SymbolUploadsDelete200ApplicationJSONSymbolTypeEnum {
    Apple = "Apple",
    JavaScript = "JavaScript",
    Breakpad = "Breakpad",
    AndroidProguard = "AndroidProguard",
    Uwp = "UWP"
}
export declare class SymbolUploadsDelete200ApplicationJSONSymbolsUploaded extends SpeakeasyBase {
    /**
     * The platform the symbol is associated with
     */
    platform: string;
    /**
     * The symbol id of the symbol binary
     */
    symbolId: string;
}
/**
 * User information of the one who intitiated the symbol upload
 */
export declare class SymbolUploadsDelete200ApplicationJSONUser extends SpeakeasyBase {
    /**
     * The full name of the user. Might for example be first and last name
     */
    displayName?: string;
    /**
     * The email of the user
     */
    email?: string;
}
/**
 * A single symbol upload entity
 */
export declare class SymbolUploadsDelete200ApplicationJSON extends SpeakeasyBase {
    /**
     * The application that this symbol upload belongs to
     */
    appId: string;
    /**
     * The file name for the symbol upload
     */
    fileName?: string;
    /**
     * The size of the file in Mebibytes. This may be 0 until the status is indexed
     */
    fileSize?: number;
    /**
     * The origin of the symbol upload
     */
    origin?: SymbolUploadsDelete200ApplicationJSONOriginEnum;
    /**
     * The current status for the symbol upload
     */
    status: SymbolUploadsDelete200ApplicationJSONStatusEnum;
    /**
     * The type of the symbol for the current symbol upload
     */
    symbolType: SymbolUploadsDelete200ApplicationJSONSymbolTypeEnum;
    /**
     * The id for the current symbol upload
     */
    symbolUploadId: string;
    /**
     * The symbols found in the upload. This may be empty until the status is indexed
     */
    symbolsUploaded?: SymbolUploadsDelete200ApplicationJSONSymbolsUploaded[];
    /**
     * When the symbol upload was committed, or last transaction time if not committed
     */
    timestamp?: Date;
    /**
     * User information of the one who intitiated the symbol upload
     */
    user?: SymbolUploadsDelete200ApplicationJSONUser;
}
export declare class SymbolUploadsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolUploadsDelete200ApplicationJSONObject?: SymbolUploadsDelete200ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolUploadsDelete403ApplicationJSONObject?: SymbolUploadsDelete403ApplicationJSON;
    /**
     * Not found
     */
    symbolUploadsDelete404ApplicationJSONObject?: SymbolUploadsDelete404ApplicationJSON;
    /**
     * Internal error
     */
    symbolUploadsDelete500ApplicationJSONObject?: SymbolUploadsDelete500ApplicationJSON;
}
