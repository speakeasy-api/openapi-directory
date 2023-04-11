import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolUploadsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class SymbolUploadsGetRequest extends SpeakeasyBase {
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
export declare class SymbolUploadsGet500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Not found
 */
export declare class SymbolUploadsGet404ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolUploadsGet403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * The origin of the symbol upload
 */
export declare enum SymbolUploadsGet200ApplicationJSONOriginEnum {
    User = "User",
    System = "System"
}
/**
 * The current status for the symbol upload
 */
export declare enum SymbolUploadsGet200ApplicationJSONStatusEnum {
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
export declare enum SymbolUploadsGet200ApplicationJSONSymbolTypeEnum {
    Apple = "Apple",
    JavaScript = "JavaScript",
    Breakpad = "Breakpad",
    AndroidProguard = "AndroidProguard",
    Uwp = "UWP"
}
export declare class SymbolUploadsGet200ApplicationJSONSymbolsUploaded extends SpeakeasyBase {
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
export declare class SymbolUploadsGet200ApplicationJSONUser extends SpeakeasyBase {
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
export declare class SymbolUploadsGet200ApplicationJSON extends SpeakeasyBase {
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
    origin?: SymbolUploadsGet200ApplicationJSONOriginEnum;
    /**
     * The current status for the symbol upload
     */
    status: SymbolUploadsGet200ApplicationJSONStatusEnum;
    /**
     * The type of the symbol for the current symbol upload
     */
    symbolType: SymbolUploadsGet200ApplicationJSONSymbolTypeEnum;
    /**
     * The id for the current symbol upload
     */
    symbolUploadId: string;
    /**
     * The symbols found in the upload. This may be empty until the status is indexed
     */
    symbolsUploaded?: SymbolUploadsGet200ApplicationJSONSymbolsUploaded[];
    /**
     * When the symbol upload was committed, or last transaction time if not committed
     */
    timestamp?: Date;
    /**
     * User information of the one who intitiated the symbol upload
     */
    user?: SymbolUploadsGet200ApplicationJSONUser;
}
export declare class SymbolUploadsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolUploadsGet200ApplicationJSONObject?: SymbolUploadsGet200ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolUploadsGet403ApplicationJSONObject?: SymbolUploadsGet403ApplicationJSON;
    /**
     * Not found
     */
    symbolUploadsGet404ApplicationJSONObject?: SymbolUploadsGet404ApplicationJSON;
    /**
     * Internal error
     */
    symbolUploadsGet500ApplicationJSONObject?: SymbolUploadsGet500ApplicationJSON;
}
