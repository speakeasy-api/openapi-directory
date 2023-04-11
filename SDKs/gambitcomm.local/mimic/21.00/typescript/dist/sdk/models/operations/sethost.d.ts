import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetHostRequest extends SpeakeasyBase {
    /**
     * Agent to set the primary IP
     */
    agentNum: number;
    /**
     * Primary IP of the agent
     */
    host: string;
}
export declare class SetHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setHost200ApplicationJSONString?: string;
}
