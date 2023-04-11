import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSshGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the SSH configuration
     */
    agentNum: number;
}
export declare class ProtocolSshGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSSH?: shared.ConfigSSH;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
