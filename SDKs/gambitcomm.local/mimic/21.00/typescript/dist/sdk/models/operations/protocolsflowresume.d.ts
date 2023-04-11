import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowResumeRequest extends SpeakeasyBase {
    /**
     * Agent to set the SFLOW
     */
    agentNum: number;
}
export declare class ProtocolSflowResumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSflowResume200ApplicationJSONString?: string;
}
