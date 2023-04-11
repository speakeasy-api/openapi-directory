import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetConfigChangedRequest extends SpeakeasyBase {
    /**
     * Agent to return the indicator
     */
    agentNum: number;
}
export declare class GetConfigChangedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getConfigChanged200ApplicationJSONInt32Integer?: number;
}
