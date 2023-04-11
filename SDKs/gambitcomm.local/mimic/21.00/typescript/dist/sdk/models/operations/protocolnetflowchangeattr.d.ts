import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowChangeAttrRequest extends SpeakeasyBase {
    /**
     * Agent to set the NETFLOW
     */
    agentNum: number;
    attr: string;
    fieldNum: number;
    flowsetUid: number;
    value: string;
}
export declare class ProtocolNetflowChangeAttrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowChangeAttr200ApplicationJSONString?: string;
}
