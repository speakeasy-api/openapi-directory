import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllCollections200ApplicationJSONCollections extends SpeakeasyBase {
    id?: string;
    name?: string;
    owner?: string;
    uid?: string;
}
/**
 * Valid Response
 */
export declare class AllCollections200ApplicationJSON extends SpeakeasyBase {
    collections?: AllCollections200ApplicationJSONCollections[];
}
export declare class AllCollectionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Valid Response
     */
    allCollections200ApplicationJSONObject?: AllCollections200ApplicationJSON;
}
