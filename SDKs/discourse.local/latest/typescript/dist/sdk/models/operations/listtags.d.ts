import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListTags200ApplicationJSONExtras extends SpeakeasyBase {
    categories?: any[];
}
export declare class ListTags200ApplicationJSONTags extends SpeakeasyBase {
    count?: number;
    id?: string;
    pmCount?: number;
    targetTag?: string;
    text?: string;
}
/**
 * notifications
 */
export declare class ListTags200ApplicationJSON extends SpeakeasyBase {
    extras?: ListTags200ApplicationJSONExtras;
    tags?: ListTags200ApplicationJSONTags[];
}
export declare class ListTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * notifications
     */
    listTags200ApplicationJSONObject?: ListTags200ApplicationJSON;
}
