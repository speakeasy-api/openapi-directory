import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolDhcpGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether DHCP tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolDhcpGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configDHCP?: shared.ConfigDHCP;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
