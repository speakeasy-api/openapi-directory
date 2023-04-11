import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetMaskRequest extends SpeakeasyBase {
    /**
     * Agent to return the primary interface
     */
    agentNum: number;
}
export declare class GetMaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getMask200ApplicationJSONString?: string;
}
