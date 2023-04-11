import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpIpaliasDisableRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate SNMPTCP IP alias
     */
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSnmptcpIpaliasDisableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmptcpIpaliasDisable200ApplicationJSONString?: string;
}
