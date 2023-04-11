import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowHaltRequest extends SpeakeasyBase {
    /**
     * Agent to set the NETFLOW
     */
    agentNum: number;
}
export declare class ProtocolNetflowHaltResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowHalt200ApplicationJSONString?: string;
}
