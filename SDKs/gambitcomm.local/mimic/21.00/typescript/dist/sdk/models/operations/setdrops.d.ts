import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetDropsRequest extends SpeakeasyBase {
    /**
     * Agent to set the drop rate
     */
    agentNum: number;
    /**
     * Drop rate of the agent
     */
    drops: number;
}
export declare class SetDropsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setDrops200ApplicationJSONInt32Integer?: number;
}
