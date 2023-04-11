import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolNetflowGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the NETFLOW configuration
     */
    agentNum: number;
}
export declare class ProtocolNetflowGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configNETFLOW?: shared.ConfigNETFLOW;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
