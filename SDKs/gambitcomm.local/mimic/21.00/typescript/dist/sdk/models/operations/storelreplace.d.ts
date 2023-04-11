import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoreLreplaceRequest extends SpeakeasyBase {
    /**
     * Value
     */
    requestBody?: string;
    /**
     * Index
     */
    index: number;
    /**
     * Variable name
     */
    var: string;
}
export declare class StoreLreplaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    storeLreplace200ApplicationJSONString?: string;
}
