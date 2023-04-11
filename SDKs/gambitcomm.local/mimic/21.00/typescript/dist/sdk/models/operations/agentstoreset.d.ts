import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AgentStoreSetRequest extends SpeakeasyBase {
    /**
     * Value
     */
    requestBody?: string;
    /**
     * Agent of the value space
     */
    agentNum: number;
    /**
     * Persistent setting
     */
    persist: number;
    /**
     * Variable name
     */
    var: string;
}
export declare class AgentStoreSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    agentStoreSet200ApplicationJSONString?: string;
}
