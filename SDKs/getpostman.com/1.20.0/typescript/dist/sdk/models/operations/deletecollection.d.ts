import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCollectionRequest extends SpeakeasyBase {
    collectionUid: string;
}
export declare class DeleteCollection404ApplicationJSONErrorDetails extends SpeakeasyBase {
    id?: string;
    item?: string;
}
export declare class DeleteCollection404ApplicationJSONError extends SpeakeasyBase {
    details?: DeleteCollection404ApplicationJSONErrorDetails;
    message?: string;
    name?: string;
}
/**
 * Collection Not Found
 */
export declare class DeleteCollection404ApplicationJSON extends SpeakeasyBase {
    error?: DeleteCollection404ApplicationJSONError;
}
export declare class DeleteCollection200ApplicationJSONCollection extends SpeakeasyBase {
    id?: string;
    uid?: string;
}
/**
 * Collection Deleted
 */
export declare class DeleteCollection200ApplicationJSON extends SpeakeasyBase {
    collection?: DeleteCollection200ApplicationJSONCollection;
}
export declare class DeleteCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Collection Deleted
     */
    deleteCollection200ApplicationJSONObject?: DeleteCollection200ApplicationJSON;
    /**
     * Collection Not Found
     */
    deleteCollection404ApplicationJSONObject?: DeleteCollection404ApplicationJSON;
}
