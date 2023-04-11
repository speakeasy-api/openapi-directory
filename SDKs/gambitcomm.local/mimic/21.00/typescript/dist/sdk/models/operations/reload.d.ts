import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReloadRequest extends SpeakeasyBase {
    /**
     * Agent to return the primary IP
     */
    agentNum: number;
}
export declare class ReloadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    reload200ApplicationJSONString?: string;
}
