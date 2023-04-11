import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetIpaliasDisableRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate TELNET IP alias
     */
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolTelnetIpaliasDisableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetIpaliasDisable200ApplicationJSONString?: string;
}
