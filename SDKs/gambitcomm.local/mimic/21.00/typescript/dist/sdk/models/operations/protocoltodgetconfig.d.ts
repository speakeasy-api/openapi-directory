import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolTodGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the TOD configuration
     */
    agentNum: number;
}
export declare class ProtocolTodGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configTOD?: shared.ConfigTOD;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
