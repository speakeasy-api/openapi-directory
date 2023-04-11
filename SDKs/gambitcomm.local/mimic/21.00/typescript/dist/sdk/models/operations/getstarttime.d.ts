import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetStarttimeRequest extends SpeakeasyBase {
    /**
     * Agent to return the relative start time
     */
    agentNum: number;
}
export declare class GetStarttimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getStarttime200ApplicationJSONString?: string;
}
