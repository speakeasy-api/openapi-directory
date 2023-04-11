import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResumeRequest extends SpeakeasyBase {
    /**
     * Agent to return the primary IP
     */
    agentNum: number;
}
export declare class ResumeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    resume200ApplicationJSONString?: string;
}
