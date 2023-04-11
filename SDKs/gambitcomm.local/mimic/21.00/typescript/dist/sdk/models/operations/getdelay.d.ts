import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDelayRequest extends SpeakeasyBase {
    /**
     * Agent to return the delay time
     */
    agentNum: number;
}
export declare class GetDelayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getDelay200ApplicationJSONInt32Integer?: number;
}
