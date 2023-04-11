import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowReloadRequest extends SpeakeasyBase {
    /**
     * Agent to set the SFLOW
     */
    agentNum: number;
}
export declare class ProtocolSflowReloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSflowReload200ApplicationJSONString?: string;
}
