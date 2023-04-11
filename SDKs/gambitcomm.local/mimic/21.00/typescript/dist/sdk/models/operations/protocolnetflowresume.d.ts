import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowResumeRequest extends SpeakeasyBase {
    /**
     * Agent to set the NETFLOW
     */
    agentNum: number;
}
export declare class ProtocolNetflowResumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowResume200ApplicationJSONString?: string;
}
