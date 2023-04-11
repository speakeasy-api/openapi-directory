import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolUploadsCompleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The desired operation for the symbol upload
 */
export declare enum SymbolUploadsCompleteRequestBodyStatusEnum {
    Committed = "committed",
    Aborted = "aborted"
}
/**
 * A request containing information pertaining to completing a symbol upload process
 */
export declare class SymbolUploadsCompleteRequestBody extends SpeakeasyBase {
    /**
     * The desired operation for the symbol upload
     */
    status: SymbolUploadsCompleteRequestBodyStatusEnum;
}
export declare class SymbolUploadsCompleteRequest extends SpeakeasyBase {
    /**
     * The symbol information
     */
    requestBody: SymbolUploadsCompleteRequestBody;
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
export declare class SymbolUploadsComplete500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolUploadsComplete403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Bad request
 */
export declare class SymbolUploadsComplete400ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * The origin of the symbol upload
 */
export declare enum SymbolUploadsComplete200ApplicationJSONOriginEnum {
    User = "User",
    System = "System"
}
/**
 * The current status for the symbol upload
 */
export declare enum SymbolUploadsComplete200ApplicationJSONStatusEnum {
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
export declare enum SymbolUploadsComplete200ApplicationJSONSymbolTypeEnum {
    Apple = "Apple",
    JavaScript = "JavaScript",
    Breakpad = "Breakpad",
    AndroidProguard = "AndroidProguard",
    Uwp = "UWP"
}
export declare class SymbolUploadsComplete200ApplicationJSONSymbolsUploaded extends SpeakeasyBase {
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
export declare class SymbolUploadsComplete200ApplicationJSONUser extends SpeakeasyBase {
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
export declare class SymbolUploadsComplete200ApplicationJSON extends SpeakeasyBase {
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
    origin?: SymbolUploadsComplete200ApplicationJSONOriginEnum;
    /**
     * The current status for the symbol upload
     */
    status: SymbolUploadsComplete200ApplicationJSONStatusEnum;
    /**
     * The type of the symbol for the current symbol upload
     */
    symbolType: SymbolUploadsComplete200ApplicationJSONSymbolTypeEnum;
    /**
     * The id for the current symbol upload
     */
    symbolUploadId: string;
    /**
     * The symbols found in the upload. This may be empty until the status is indexed
     */
    symbolsUploaded?: SymbolUploadsComplete200ApplicationJSONSymbolsUploaded[];
    /**
     * When the symbol upload was committed, or last transaction time if not committed
     */
    timestamp?: Date;
    /**
     * User information of the one who intitiated the symbol upload
     */
    user?: SymbolUploadsComplete200ApplicationJSONUser;
}
export declare class SymbolUploadsCompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolUploadsComplete200ApplicationJSONObject?: SymbolUploadsComplete200ApplicationJSON;
    /**
     * Bad request
     */
    symbolUploadsComplete400ApplicationJSONObject?: SymbolUploadsComplete400ApplicationJSON;
    /**
     * Unauthorized
     */
    symbolUploadsComplete403ApplicationJSONObject?: SymbolUploadsComplete403ApplicationJSON;
    /**
     * Internal error
     */
    symbolUploadsComplete500ApplicationJSONObject?: SymbolUploadsComplete500ApplicationJSON;
}
