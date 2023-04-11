import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetScenRequest extends SpeakeasyBase {
    /**
     * Agent to return the first scenario number
     */
    agentNum: number;
}
export declare class GetScenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getScen200ApplicationJSONInt32Integer?: number;
}
