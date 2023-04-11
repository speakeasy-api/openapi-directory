import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TrapConfigDelRequest extends SpeakeasyBase {
    /**
     * IP of the destination
     */
    ip: string;
    /**
     * Agent to delete the destination
     */
    agentNum: number;
    /**
     * port of the destination
     */
    port: number;
}
export declare class TrapConfigDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    trapConfigDel200ApplicationJSONString?: string;
}
