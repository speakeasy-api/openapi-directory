import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StartRequest extends SpeakeasyBase {
    /**
     * Agent to return the primary IP
     */
    agentNum: number;
}
export declare class StartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    start200ApplicationJSONString?: string;
}
