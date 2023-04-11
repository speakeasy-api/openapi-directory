import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetVariablesRequest extends SpeakeasyBase {
    /**
     * Agent of the value space
     */
    agentNum: number;
    /**
     * Row of the table in the agent's value space. 0 for single instance objects
     */
    instance: string;
    /**
     * Single instance object or object (column) of the table in the agent's value space.
     */
    object: string;
}
export declare class GetVariablesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getVariables200ApplicationJSONStrings?: string[];
}
