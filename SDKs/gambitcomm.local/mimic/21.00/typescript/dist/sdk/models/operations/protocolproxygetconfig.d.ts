import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolProxyGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the PROXY configuration
     */
    agentNum: number;
}
export declare class ProtocolProxyGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configPROXY?: shared.ConfigPROXY;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
