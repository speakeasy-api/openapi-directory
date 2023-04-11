import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateCollectionRequestBodyCollectionInfo extends SpeakeasyBase {
    description?: string;
    name?: string;
    schema?: string;
}
export declare class CreateCollectionRequestBodyCollectionItemItemRequestBody extends SpeakeasyBase {
    mode?: string;
    raw?: string;
}
export declare class CreateCollectionRequestBodyCollectionItemItemRequestHeader extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class CreateCollectionRequestBodyCollectionItemItemRequest extends SpeakeasyBase {
    body?: CreateCollectionRequestBodyCollectionItemItemRequestBody;
    description?: string;
    header?: CreateCollectionRequestBodyCollectionItemItemRequestHeader[];
    method?: string;
    url?: string;
}
export declare class CreateCollectionRequestBodyCollectionItemItem extends SpeakeasyBase {
    name?: string;
    request?: CreateCollectionRequestBodyCollectionItemItemRequest;
}
export declare class CreateCollectionRequestBodyCollectionItem extends SpeakeasyBase {
    item?: CreateCollectionRequestBodyCollectionItemItem[];
    name?: string;
}
export declare class CreateCollectionRequestBodyCollection extends SpeakeasyBase {
    info?: CreateCollectionRequestBodyCollectionInfo;
    item?: CreateCollectionRequestBodyCollectionItem[];
}
export declare class CreateCollectionRequestBody extends SpeakeasyBase {
    collection?: CreateCollectionRequestBodyCollection;
}
export declare class CreateCollection400ApplicationJSONError extends SpeakeasyBase {
    message?: string;
    name?: string;
}
/**
 * Malformed Request
 */
export declare class CreateCollection400ApplicationJSON extends SpeakeasyBase {
    error?: CreateCollection400ApplicationJSONError;
}
export declare class CreateCollection200ApplicationJSONCollection extends SpeakeasyBase {
    id?: string;
    name?: string;
    uid?: string;
}
/**
 * Create Collection in a Workspace
 */
export declare class CreateCollection200ApplicationJSON extends SpeakeasyBase {
    collection?: CreateCollection200ApplicationJSONCollection;
}
export declare class CreateCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Create Collection in a Workspace
     */
    createCollection200ApplicationJSONObject?: CreateCollection200ApplicationJSON;
    /**
     * Malformed Request
     */
    createCollection400ApplicationJSONObject?: CreateCollection400ApplicationJSON;
}
