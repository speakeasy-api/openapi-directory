import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolWebGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the WEB configuration
     */
    agentNum: number;
}
export declare class ProtocolWebGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configWEB?: shared.ConfigWEB;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
