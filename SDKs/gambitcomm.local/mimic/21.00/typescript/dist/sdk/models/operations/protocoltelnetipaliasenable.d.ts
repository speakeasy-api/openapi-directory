import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetIpaliasEnableRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate TELNET IP alias
     */
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolTelnetIpaliasEnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetIpaliasEnable200ApplicationJSONString?: string;
}
