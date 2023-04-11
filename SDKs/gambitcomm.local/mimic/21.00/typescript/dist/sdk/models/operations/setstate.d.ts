import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetStateRequest extends SpeakeasyBase {
    /**
     * Agent of the value space
     */
    agentNum: number;
    /**
     * Object
     */
    object: string;
    /**
     * State
     */
    state: number;
}
export declare class SetStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setState200ApplicationJSONString?: string;
}
