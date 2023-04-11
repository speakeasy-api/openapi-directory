import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebPortSetRequest extends SpeakeasyBase {
    /**
     * Agent to set WEB port
     */
    agentNum: number;
    /**
     * TCP port
     */
    port: number;
    /**
     * Encryption or related protocol
     */
    protocol: string;
    /**
     * Encryption or related protocol version
     */
    version: string;
}
export declare class ProtocolWebPortSetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebPortSet200ApplicationJSONString?: string;
}
