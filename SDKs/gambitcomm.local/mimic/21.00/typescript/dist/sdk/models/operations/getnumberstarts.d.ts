import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNumberStartsRequest extends SpeakeasyBase {
    /**
     * Agent to return the count
     */
    agentNum: number;
}
export declare class GetNumberStartsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getNumberStarts200ApplicationJSONInt32Integer?: number;
}
