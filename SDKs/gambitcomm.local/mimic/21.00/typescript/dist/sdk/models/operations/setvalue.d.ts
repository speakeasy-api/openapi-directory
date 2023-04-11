import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetValueRequest extends SpeakeasyBase {
    /**
     * Value
     */
    requestBody?: string;
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
    /**
     * Variable
     */
    variable: string;
}
export declare class SetValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setValue200ApplicationJSONString?: string;
}
