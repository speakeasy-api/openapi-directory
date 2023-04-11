import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSshIpaliasIsenabledRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate SSH IP alias
     */
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSshIpaliasIsenabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSshIpaliasIsenabled200ApplicationJSONString?: string;
}
