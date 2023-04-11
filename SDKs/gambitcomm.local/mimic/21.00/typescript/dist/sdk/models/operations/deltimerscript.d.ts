import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DelTimerScriptRequest extends SpeakeasyBase {
    /**
     * Agent to return the timer script list
     */
    agentNum: number;
    /**
     * Arguments to the script
     */
    arg: string;
    /**
     * Interval in msec
     */
    interval: number;
    /**
     * Script name
     */
    script: string;
}
export declare class DelTimerScriptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    delTimerScript200ApplicationJSONString?: string;
}
