import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOiddirRequest extends SpeakeasyBase {
    /**
     * Agent to return the directory path
     */
    agentNum: number;
}
export declare class GetOiddirResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getOiddir200ApplicationJSONString?: string;
}
