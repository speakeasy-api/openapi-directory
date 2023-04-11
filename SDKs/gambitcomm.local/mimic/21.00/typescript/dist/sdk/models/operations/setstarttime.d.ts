import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetStarttimeRequest extends SpeakeasyBase {
    /**
     * Agent to return the relative start time
     */
    agentNum: number;
    /**
     * Relative start time of the agent
     */
    start: number;
}
export declare class SetStarttimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setStarttime200ApplicationJSONString?: string;
}
