import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetIpaliasIsenabledRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate TELNET IP alias
     */
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolTelnetIpaliasIsenabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetIpaliasIsenabled200ApplicationJSONString?: string;
}
