import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ImportExportedData400ApplicationJSONErrorDetails extends SpeakeasyBase {
    param?: string;
}
export declare class ImportExportedData400ApplicationJSONError extends SpeakeasyBase {
    details?: ImportExportedData400ApplicationJSONErrorDetails;
    message?: string;
    name?: string;
}
/**
 * Error: Param Missing
 */
export declare class ImportExportedData400ApplicationJSON extends SpeakeasyBase {
    error?: ImportExportedData400ApplicationJSONError;
}
export declare class ImportExportedData200ApplicationJSONCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
/**
 * Success: Import to a specific workspace with workspace ID passed as a query parameter
 */
export declare class ImportExportedData200ApplicationJSON extends SpeakeasyBase {
    collections?: ImportExportedData200ApplicationJSONCollections[];
}
export declare class ImportExportedDataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success: Import to a specific workspace with workspace ID passed as a query parameter
     */
    importExportedData200ApplicationJSONObject?: ImportExportedData200ApplicationJSON;
    /**
     * Error: Param Missing
     */
    importExportedData400ApplicationJSONObject?: ImportExportedData400ApplicationJSON;
}
