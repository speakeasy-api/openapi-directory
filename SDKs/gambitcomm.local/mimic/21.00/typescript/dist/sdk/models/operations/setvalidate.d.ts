import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetValidateRequest extends SpeakeasyBase {
    /**
     * Agent to set the bitmask integer
     */
    agentNum: number;
    /**
     * Bitmask integer to set
     */
    validate: number;
}
export declare class SetValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setValidate200ApplicationJSONInt32Integer?: number;
}
