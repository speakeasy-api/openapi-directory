import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPrivdirRequest extends SpeakeasyBase {
    /**
     * Agent to return the directory path
     */
    agentNum: number;
}
export declare class GetPrivdirResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getPrivdir200ApplicationJSONString?: string;
}
