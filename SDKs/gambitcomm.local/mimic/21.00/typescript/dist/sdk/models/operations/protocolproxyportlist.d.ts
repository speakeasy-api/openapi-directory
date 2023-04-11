import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyPortListRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate PROXY target
     */
    agentNum: number;
}
export declare class ProtocolProxyPortListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolProxyPortList200ApplicationJSONInt32Integers?: number[];
}
