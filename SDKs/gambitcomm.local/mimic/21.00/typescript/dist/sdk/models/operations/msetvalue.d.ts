import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MsetValueRequest extends SpeakeasyBase {
    /**
     * objInsVarValArray
     */
    requestBody?: string[][];
    /**
     * Agent of the value space
     */
    agentNum: number;
}
export declare class MsetValueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    msetValue200ApplicationJSONString?: string;
}
