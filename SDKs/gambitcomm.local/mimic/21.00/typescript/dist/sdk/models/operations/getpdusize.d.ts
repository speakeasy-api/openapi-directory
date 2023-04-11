import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPdusizeRequest extends SpeakeasyBase {
    /**
     * Agent to return the PDU size
     */
    agentNum: number;
}
export declare class GetPdusizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getPdusize200ApplicationJSONInt32Integer?: number;
}
