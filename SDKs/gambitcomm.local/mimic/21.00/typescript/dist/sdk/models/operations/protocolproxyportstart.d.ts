import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyPortStartRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate PROXY target
     */
    agentNum: number;
    port: number;
}
export declare class ProtocolProxyPortStartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxyPortStart200ApplicationJSONString?: string;
}
