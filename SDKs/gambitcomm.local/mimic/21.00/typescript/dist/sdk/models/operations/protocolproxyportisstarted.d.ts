import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyPortIsstartedRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate PROXY target
     */
    agentNum: number;
    port: number;
}
export declare class ProtocolProxyPortIsstartedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxyPortIsstarted200ApplicationJSONString?: string;
}
