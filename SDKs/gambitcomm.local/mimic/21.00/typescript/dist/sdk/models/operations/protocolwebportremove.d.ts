import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolWebPortRemoveRequest extends SpeakeasyBase {
    /**
     * Agent to remove WEB port
     */
    agentNum: number;
    /**
     * TCP port
     */
    port: number;
}
export declare class ProtocolWebPortRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolWebPortRemove200ApplicationJSONString?: string;
}
