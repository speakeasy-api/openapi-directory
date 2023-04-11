import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowSetCollectorRequest extends SpeakeasyBase {
    /**
     * Agent to set the NETFLOW
     */
    agentNum: number;
    /**
     * file name to load config
     */
    collectorIP: string;
}
export declare class ProtocolNetflowSetCollectorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowSetCollector200ApplicationJSONString?: string;
}
