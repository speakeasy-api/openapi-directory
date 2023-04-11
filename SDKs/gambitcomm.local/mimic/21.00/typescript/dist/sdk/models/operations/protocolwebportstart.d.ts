import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebPortStartRequest extends SpeakeasyBase {
    /**
     * Agent to start WEB port
     */
    agentNum: number;
    /**
     * TCP port
     */
    port: number;
}
export declare class ProtocolWebPortStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebPortStart200ApplicationJSONString?: string;
}
