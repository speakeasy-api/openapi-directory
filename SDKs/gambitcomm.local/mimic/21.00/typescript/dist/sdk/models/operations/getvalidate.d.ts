import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetValidateRequest extends SpeakeasyBase {
    /**
     * Agent to return the bitmask integer
     */
    agentNum: number;
}
export declare class GetValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getValidate200ApplicationJSONInt32Integer?: number;
}
