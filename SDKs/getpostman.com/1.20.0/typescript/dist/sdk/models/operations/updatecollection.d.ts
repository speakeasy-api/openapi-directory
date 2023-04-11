import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UpdateCollectionRequestBodyCollectionInfo extends SpeakeasyBase {
    postmanId?: string;
    description?: string;
    name?: string;
    schema?: string;
}
export declare class UpdateCollectionRequestBodyCollectionItemItemRequestBody extends SpeakeasyBase {
    mode?: string;
    raw?: string;
}
export declare class UpdateCollectionRequestBodyCollectionItemItemRequestHeader extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class UpdateCollectionRequestBodyCollectionItemItemRequest extends SpeakeasyBase {
    body?: UpdateCollectionRequestBodyCollectionItemItemRequestBody;
    description?: string;
    header?: UpdateCollectionRequestBodyCollectionItemItemRequestHeader[];
    method?: string;
    url?: string;
}
export declare class UpdateCollectionRequestBodyCollectionItemItem extends SpeakeasyBase {
    name?: string;
    request?: UpdateCollectionRequestBodyCollectionItemItemRequest;
}
export declare class UpdateCollectionRequestBodyCollectionItem extends SpeakeasyBase {
    item?: UpdateCollectionRequestBodyCollectionItemItem[];
    name?: string;
}
export declare class UpdateCollectionRequestBodyCollection extends SpeakeasyBase {
    info?: UpdateCollectionRequestBodyCollectionInfo;
    item?: UpdateCollectionRequestBodyCollectionItem[];
}
export declare class UpdateCollectionRequestBody extends SpeakeasyBase {
    collection?: UpdateCollectionRequestBodyCollection;
}
export declare class UpdateCollectionRequest extends SpeakeasyBase {
    requestBody?: UpdateCollectionRequestBody;
    collectionUid: string;
}
export declare class UpdateCollection404ApplicationJSONErrorDetails extends SpeakeasyBase {
    id?: string;
    item?: string;
}
export declare class UpdateCollection404ApplicationJSONError extends SpeakeasyBase {
    details?: UpdateCollection404ApplicationJSONErrorDetails;
    message?: string;
    name?: string;
}
/**
 * Collection Not Found
 */
export declare class UpdateCollection404ApplicationJSON extends SpeakeasyBase {
    error?: UpdateCollection404ApplicationJSONError;
}
export declare class UpdateCollection403ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Not Enough Permissions
 */
export declare class UpdateCollection403ApplicationJSON extends SpeakeasyBase {
    error?: UpdateCollection403ApplicationJSONError;
}
export declare class UpdateCollection400ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Collection ID Mismatch
 */
export declare class UpdateCollection400ApplicationJSON extends SpeakeasyBase {
    error?: UpdateCollection400ApplicationJSONError;
}
export declare class UpdateCollection200ApplicationJSONCollection extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
/**
 * Collection Updated
 */
export declare class UpdateCollection200ApplicationJSON extends SpeakeasyBase {
    collection?: UpdateCollection200ApplicationJSONCollection;
}
export declare class UpdateCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Collection Updated
     */
    updateCollection200ApplicationJSONObject?: UpdateCollection200ApplicationJSON;
    /**
     * Collection ID Mismatch
     */
    updateCollection400ApplicationJSONObject?: UpdateCollection400ApplicationJSON;
    /**
     * Not Enough Permissions
     */
    updateCollection403ApplicationJSONObject?: UpdateCollection403ApplicationJSON;
    /**
     * Collection Not Found
     */
    updateCollection404ApplicationJSONObject?: UpdateCollection404ApplicationJSON;
}
