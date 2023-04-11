import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInfoRequest extends SpeakeasyBase {
    /**
     * Agent to show the information of the object
     */
    agentNum: number;
    /**
     * Object
     */
    object: string;
}
export declare class GetInfoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getInfo200ApplicationJSONString?: string;
}
