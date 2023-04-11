import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowChangeTfsRequest extends SpeakeasyBase {
    /**
     * Agent to set the NETFLOW
     */
    agentNum: number;
    /**
     * NETFLOW export interval
     */
    interval: number;
}
export declare class ProtocolNetflowChangeTfsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowChangeTfs200ApplicationJSONString?: string;
}
