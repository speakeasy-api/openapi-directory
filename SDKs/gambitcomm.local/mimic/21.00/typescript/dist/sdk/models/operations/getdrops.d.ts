import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDropsRequest extends SpeakeasyBase {
    /**
     * Agent to return the drop rate
     */
    agentNum: number;
}
export declare class GetDropsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getDrops200ApplicationJSONInt32Integer?: number;
}
