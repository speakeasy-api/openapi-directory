import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolIpmiGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the IPMI configuration
     */
    agentNum: number;
}
export declare class ProtocolIpmiGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configIPMI?: shared.ConfigIPMI;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
