import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SingleCollectionRequest extends SpeakeasyBase {
    collectionUid: string;
}
export declare class SingleCollection200ApplicationJSONCollectionInfo extends SpeakeasyBase {
    postmanId?: string;
    description?: string;
    name?: string;
    schema?: string;
}
export declare class SingleCollection200ApplicationJSONCollectionItemEventScript extends SpeakeasyBase {
    exec?: string;
    type?: string;
}
export declare class SingleCollection200ApplicationJSONCollectionItemEvent extends SpeakeasyBase {
    listen?: string;
    script?: SingleCollection200ApplicationJSONCollectionItemEventScript;
}
export declare class SingleCollection200ApplicationJSONCollectionItemRequestBody extends SpeakeasyBase {
    formdata?: any[];
    mode?: string;
}
export declare class SingleCollection200ApplicationJSONCollectionItemRequestHeader extends SpeakeasyBase {
    description?: string;
    key?: string;
    value?: string;
}
export declare class SingleCollection200ApplicationJSONCollectionItemRequest extends SpeakeasyBase {
    body?: SingleCollection200ApplicationJSONCollectionItemRequestBody;
    description?: string;
    header?: SingleCollection200ApplicationJSONCollectionItemRequestHeader[];
    method?: string;
    url?: string;
}
export declare class SingleCollection200ApplicationJSONCollectionItem extends SpeakeasyBase {
    event?: SingleCollection200ApplicationJSONCollectionItemEvent[];
    id?: string;
    name?: string;
    request?: SingleCollection200ApplicationJSONCollectionItemRequest;
    response?: any[];
}
export declare class SingleCollection200ApplicationJSONCollection extends SpeakeasyBase {
    info?: SingleCollection200ApplicationJSONCollectionInfo;
    item?: SingleCollection200ApplicationJSONCollectionItem[];
    variables?: any[];
}
/**
 * Valid Response
 */
export declare class SingleCollection200ApplicationJSON extends SpeakeasyBase {
    collection?: SingleCollection200ApplicationJSONCollection;
}
export declare class SingleCollectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Valid Response
     */
    singleCollection200ApplicationJSONObject?: SingleCollection200ApplicationJSON;
}
