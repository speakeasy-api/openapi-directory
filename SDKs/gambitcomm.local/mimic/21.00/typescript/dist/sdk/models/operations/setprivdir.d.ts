import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetPrivdirRequest extends SpeakeasyBase {
    /**
     * Agent to set the directory path
     */
    agentNum: number;
    /**
     * Directory path for the agent
     */
    privdir: string;
}
export declare class SetPrivdirResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setPrivdir200ApplicationJSONString?: string;
}
