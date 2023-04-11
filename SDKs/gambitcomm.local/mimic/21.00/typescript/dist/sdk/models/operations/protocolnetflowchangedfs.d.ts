import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowChangeDfsRequest extends SpeakeasyBase {
    /**
     * Agent to set the NETFLOW
     */
    agentNum: number;
    /**
     * NETFLOW export interval
     */
    interval: number;
}
export declare class ProtocolNetflowChangeDfsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowChangeDfs200ApplicationJSONString?: string;
}
