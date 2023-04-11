import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyPortAddRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate PROXY target
     */
    agentNum: number;
    port: number;
    target: string;
    targetPort: number;
}
export declare class ProtocolProxyPortAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxyPortAdd200ApplicationJSONString?: string;
}
