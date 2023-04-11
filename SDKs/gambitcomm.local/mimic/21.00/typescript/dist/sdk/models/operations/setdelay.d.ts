import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetDelayRequest extends SpeakeasyBase {
    /**
     * Agent to set the delay time
     */
    agentNum: number;
    /**
     * Delay time of the agent
     */
    delay: number;
}
export declare class SetDelayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setDelay200ApplicationJSONInt32Integer?: number;
}
