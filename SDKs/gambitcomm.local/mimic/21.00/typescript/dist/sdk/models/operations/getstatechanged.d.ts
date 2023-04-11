import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetStateChangedRequest extends SpeakeasyBase {
    /**
     * Agent to return the indicator
     */
    agentNum: number;
}
export declare class GetStateChangedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getStateChanged200ApplicationJSONInt32Integer?: number;
}
