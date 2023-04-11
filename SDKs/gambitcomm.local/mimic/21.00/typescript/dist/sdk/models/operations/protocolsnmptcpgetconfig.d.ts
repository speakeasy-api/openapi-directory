import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPTCP configuration
     */
    agentNum: number;
}
export declare class ProtocolSnmptcpGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSNMPTCP?: shared.ConfigSNMPTCP;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
