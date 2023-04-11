import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetHostRequest extends SpeakeasyBase {
    /**
     * Agent to return the primary IP
     */
    agentNum: number;
}
export declare class GetHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getHost200ApplicationJSONString?: string;
}
