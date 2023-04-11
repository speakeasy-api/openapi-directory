import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAgentStateRequest extends SpeakeasyBase {
    /**
     * Agent to return the state
     */
    agentNum: number;
}
export declare class GetAgentStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getAgentState200ApplicationJSONInt32Integer?: number;
}
