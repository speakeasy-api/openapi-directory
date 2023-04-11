import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTimerScriptsRequest extends SpeakeasyBase {
    /**
     * Agent to return the timer script list
     */
    agentNum: number;
}
export declare class ListTimerScriptsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    timerScripts?: shared.TimerScript[];
}
