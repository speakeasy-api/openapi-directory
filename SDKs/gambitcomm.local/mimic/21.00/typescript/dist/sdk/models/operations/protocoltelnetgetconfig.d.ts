import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the TELNET configuration
     */
    agentNum: number;
}
export declare class ProtocolTelnetGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configTELNET?: shared.ConfigTELNET;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
