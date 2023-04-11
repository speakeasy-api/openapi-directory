import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSimRequest extends SpeakeasyBase {
    /**
     * Agent to return the first simulation name
     */
    agentNum: number;
}
export declare class GetSimResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getSim200ApplicationJSONString?: string;
}
