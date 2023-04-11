import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolDhcpGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the DHCP configuration
     */
    agentNum: number;
}
export declare class ProtocolDhcpGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configDHCP?: shared.ConfigDHCP;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
