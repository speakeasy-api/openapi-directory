import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSflowGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the SFLOW configuration
     */
    agentNum: number;
}
export declare class ProtocolSflowGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configSFLOW?: shared.ConfigSFLOW;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
