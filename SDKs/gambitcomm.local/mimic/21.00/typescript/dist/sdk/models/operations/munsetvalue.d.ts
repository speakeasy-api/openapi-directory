import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MunsetValueRequest extends SpeakeasyBase {
    /**
     * objInsVarArray
     */
    requestBody?: string[][];
    /**
     * Agent of the value space
     */
    agentNum: number;
}
export declare class MunsetValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    munsetValue200ApplicationJSONString?: string;
}
