import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetMaskRequest extends SpeakeasyBase {
    /**
     * Agent to set the primary IP address mask
     */
    agentNum: number;
    /**
     * Mask to set for the agent primary IP address
     */
    mask: string;
}
export declare class SetMaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setMask200ApplicationJSONString?: string;
}
