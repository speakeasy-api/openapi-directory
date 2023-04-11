import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolTodGetTraceRequest extends SpeakeasyBase {
    /**
     * Agent to show whether TOD tracing is enabled
     */
    agentNum: number;
}
export declare class ProtocolTodGetTraceResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configTOD?: shared.ConfigTOD;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
