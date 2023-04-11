import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSshIpaliasEnableRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate SSH IP alias
     */
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSshIpaliasEnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSshIpaliasEnable200ApplicationJSONString?: string;
}
