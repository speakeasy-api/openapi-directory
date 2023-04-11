import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebPortAddRequest extends SpeakeasyBase {
    /**
     * Agent to add WEB port
     */
    agentNum: number;
    /**
     * TCP port
     */
    port: number;
}
export declare class ProtocolWebPortAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebPortAdd200ApplicationJSONString?: string;
}
