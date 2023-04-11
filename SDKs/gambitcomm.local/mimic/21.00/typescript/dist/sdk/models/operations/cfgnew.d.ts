import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CfgNewRequest extends SpeakeasyBase {
    /**
     * Agent number to start clearing
     */
    firstAgentNum: number;
    /**
     * Agent number to end the clearing
     */
    lastAgentNum: number;
}
export declare class CfgNewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    cfgNew200ApplicationJSONObject?: Record<string, number>;
}
