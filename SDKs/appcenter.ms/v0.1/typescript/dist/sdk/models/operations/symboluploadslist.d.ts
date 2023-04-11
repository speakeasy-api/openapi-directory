import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SymbolUploadsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Filter results by the current status of a symbol upload: * all: all states in the symbol upload process. Includes created, aborted, committed, processing, indexed and failed states * uploaded: all states after package is uploaded. Includes committed, processing, indexed and failed states * processed: symbol upload processing is completed. Includes indexed and failed states.
 *
 * @remarks
 *
 */
export declare enum SymbolUploadsListStatusEnum {
    All = "all",
    Uploaded = "uploaded",
    Processed = "processed"
}
/**
 * The type of symbols
 */
export declare enum SymbolUploadsListSymbolTypeEnum {
    AndroidProguard = "AndroidProguard",
    Apple = "Apple",
    Breakpad = "Breakpad",
    JavaScript = "JavaScript",
    Uwp = "UWP"
}
export declare class SymbolUploadsListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * Filter results by the current status of a symbol upload: * all: all states in the symbol upload process. Includes created, aborted, committed, processing, indexed and failed states * uploaded: all states after package is uploaded. Includes committed, processing, indexed and failed states * processed: symbol upload processing is completed. Includes indexed and failed states.
     *
     * @remarks
     *
     */
    status?: SymbolUploadsListStatusEnum;
    /**
     * The type of symbols
     */
    symbolType?: SymbolUploadsListSymbolTypeEnum;
    /**
     * The maximum number of results to return.
     */
    top?: number;
}
/**
 * Internal error
 */
export declare class SymbolUploadsList500ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * Unauthorized
 */
export declare class SymbolUploadsList403ApplicationJSON extends SpeakeasyBase {
    message: string;
}
/**
 * The origin of the symbol upload
 */
export declare enum SymbolUploadsList200ApplicationJSONOriginEnum {
    User = "User",
    System = "System"
}
/**
 * The current status for the symbol upload
 */
export declare enum SymbolUploadsList200ApplicationJSONStatusEnum {
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
export declare enum SymbolUploadsList200ApplicationJSONSymbolTypeEnum {
    Apple = "Apple",
    JavaScript = "JavaScript",
    Breakpad = "Breakpad",
    AndroidProguard = "AndroidProguard",
    Uwp = "UWP"
}
export declare class SymbolUploadsList200ApplicationJSONSymbolsUploaded extends SpeakeasyBase {
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
export declare class SymbolUploadsList200ApplicationJSONUser extends SpeakeasyBase {
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
export declare class SymbolUploadsList200ApplicationJSON extends SpeakeasyBase {
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
    origin?: SymbolUploadsList200ApplicationJSONOriginEnum;
    /**
     * The current status for the symbol upload
     */
    status: SymbolUploadsList200ApplicationJSONStatusEnum;
    /**
     * The type of the symbol for the current symbol upload
     */
    symbolType: SymbolUploadsList200ApplicationJSONSymbolTypeEnum;
    /**
     * The id for the current symbol upload
     */
    symbolUploadId: string;
    /**
     * The symbols found in the upload. This may be empty until the status is indexed
     */
    symbolsUploaded?: SymbolUploadsList200ApplicationJSONSymbolsUploaded[];
    /**
     * When the symbol upload was committed, or last transaction time if not committed
     */
    timestamp?: Date;
    /**
     * User information of the one who intitiated the symbol upload
     */
    user?: SymbolUploadsList200ApplicationJSONUser;
}
export declare class SymbolUploadsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    symbolUploadsList200ApplicationJSONObjects?: SymbolUploadsList200ApplicationJSON[];
    /**
     * Unauthorized
     */
    symbolUploadsList403ApplicationJSONObject?: SymbolUploadsList403ApplicationJSON;
    /**
     * Internal error
     */
    symbolUploadsList500ApplicationJSONObject?: SymbolUploadsList500ApplicationJSON;
}
