import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebPortStopRequest extends SpeakeasyBase {
    /**
     * Agent to stop WEB port
     */
    agentNum: number;
    /**
     * TCP port
     */
    port: number;
}
export declare class ProtocolWebPortStopResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebPortStop200ApplicationJSONString?: string;
}
