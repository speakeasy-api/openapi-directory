import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowHaltRequest extends SpeakeasyBase {
    /**
     * Agent to set the SFLOW
     */
    agentNum: number;
}
export declare class ProtocolSflowHaltResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSflowHalt200ApplicationJSONString?: string;
}
