import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPTCP argument structure
     */
    agentNum: number;
}
export declare class ProtocolSnmptcpGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmptcpGetArgs200ApplicationJSONObject?: Record<string, any>;
}
