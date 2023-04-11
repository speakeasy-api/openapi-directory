import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DelDaemonTimerScriptRequest extends SpeakeasyBase {
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
export declare class DelDaemonTimerScriptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    delDaemonTimerScript200ApplicationJSONString?: string;
}
