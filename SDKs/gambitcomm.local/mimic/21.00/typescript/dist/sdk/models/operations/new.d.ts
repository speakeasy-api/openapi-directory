import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NewRequest extends SpeakeasyBase {
    /**
     * Primary IP
     */
    ip: string;
    /**
     * Created agent object
     */
    requestBody: shared.Triplet[];
    /**
     * Agent to return the primary IP
     */
    agentNum: number;
}
export declare class NewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    new200ApplicationJSONString?: string;
}
