import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SyncRelationsWithSchemaRequest extends SpeakeasyBase {
    /**
     * Id of the API
     */
    apiId: string;
    /**
     * Id of the API version
     */
    apiVersionId: string;
    /**
     * Relation id
     */
    entityId: string;
    /**
     * Relation type (e.g documentation, contracttest, integrationtest, testsuite, mock, monitor)
     */
    entityType: string;
}
export declare class SyncRelationsWithSchema400ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Failed to sync
 */
export declare class SyncRelationsWithSchema400ApplicationJSON extends SpeakeasyBase {
    error?: SyncRelationsWithSchema400ApplicationJSONError;
}
/**
 * Successful sync
 */
export declare class SyncRelationsWithSchema200ApplicationJSON extends SpeakeasyBase {
    success?: boolean;
}
export declare class SyncRelationsWithSchemaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful sync
     */
    syncRelationsWithSchema200ApplicationJSONObject?: SyncRelationsWithSchema200ApplicationJSON;
    /**
     * Failed to sync
     */
    syncRelationsWithSchema400ApplicationJSONObject?: SyncRelationsWithSchema400ApplicationJSON;
}
