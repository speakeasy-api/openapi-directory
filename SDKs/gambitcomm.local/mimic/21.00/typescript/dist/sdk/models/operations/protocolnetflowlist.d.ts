import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowListRequest extends SpeakeasyBase {
    /**
     * Agent to show NETFLOW statistics
     */
    agentNum: number;
}
export declare class ProtocolNetflowListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolNetflowList200ApplicationJSONObjects?: Record<string, any>[];
}
