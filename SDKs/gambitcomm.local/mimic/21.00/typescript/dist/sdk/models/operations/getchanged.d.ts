import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChangedRequest extends SpeakeasyBase {
    /**
     * Agent to return the indicator
     */
    agentNum: number;
}
export declare class GetChangedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getChanged200ApplicationJSONInt32Integer?: number;
}
