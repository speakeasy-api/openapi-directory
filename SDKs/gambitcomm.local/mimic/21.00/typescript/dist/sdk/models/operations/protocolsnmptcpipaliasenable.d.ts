import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpIpaliasEnableRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate SNMPTCP IP alias
     */
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSnmptcpIpaliasEnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmptcpIpaliasEnable200ApplicationJSONString?: string;
}
