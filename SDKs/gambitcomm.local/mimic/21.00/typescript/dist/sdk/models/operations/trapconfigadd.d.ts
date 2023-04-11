import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TrapConfigAddRequest extends SpeakeasyBase {
    /**
     * IP of the destination
     */
    ip: string;
    /**
     * Agent to add the destination
     */
    agentNum: number;
    /**
     * port of the destination
     */
    port: number;
}
export declare class TrapConfigAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    trapConfigAdd200ApplicationJSONString?: string;
}
