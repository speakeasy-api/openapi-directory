import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AgentStoreUnsetRequest extends SpeakeasyBase {
    /**
     * Agent of the value space
     */
    agentNum: number;
    /**
     * Variable name
     */
    var: string;
}
export declare class AgentStoreUnsetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    agentStoreUnset200ApplicationJSONString?: string;
}
