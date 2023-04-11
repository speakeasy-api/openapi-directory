import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class HaltRequest extends SpeakeasyBase {
    /**
     * Agent to return the primary IP
     */
    agentNum: number;
}
export declare class HaltResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    halt200ApplicationJSONString?: string;
}
