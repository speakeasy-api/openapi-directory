import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSshIpaliasDisableRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate SSH IP alias
     */
    agentNum: number;
    ipaddress: string;
    port: number;
}
export declare class ProtocolSshIpaliasDisableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSshIpaliasDisable200ApplicationJSONString?: string;
}
