import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyPortRemoveRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate PROXY target
     */
    agentNum: number;
    port: number;
}
export declare class ProtocolProxyPortRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxyPortRemove200ApplicationJSONString?: string;
}
