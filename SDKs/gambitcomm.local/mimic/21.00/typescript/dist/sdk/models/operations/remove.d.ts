import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveRequest extends SpeakeasyBase {
    /**
     * Agent of the value space
     */
    agentNum: number;
    /**
     * Object (column) of the table in the agent's value space
     */
    instance: string;
    /**
     * Object (column) of the table in the agent's value space
     */
    object: string;
}
export declare class RemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    remove200ApplicationJSONString?: string;
}
