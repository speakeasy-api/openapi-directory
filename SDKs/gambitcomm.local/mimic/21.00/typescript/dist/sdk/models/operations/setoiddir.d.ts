import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetOiddirRequest extends SpeakeasyBase {
    /**
     * Agent to set the directory path
     */
    agentNum: number;
    /**
     * Directory path for the agent
     */
    oiddir: string;
}
export declare class SetOiddirResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setOiddir200ApplicationJSONString?: string;
}
