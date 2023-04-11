import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StorePersistsRequest extends SpeakeasyBase {
    /**
     * Variable name
     */
    var: string;
}
export declare class StorePersistsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    storePersists200ApplicationJSONString?: string;
}
