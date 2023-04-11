import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3GetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPv3 configuration
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3GetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSNMPv3?: shared.ConfigSNMPv3;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
