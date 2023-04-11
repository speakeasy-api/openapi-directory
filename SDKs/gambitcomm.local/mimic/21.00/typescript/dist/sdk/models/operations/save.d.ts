import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SaveRequest extends SpeakeasyBase {
    /**
     * Agent to save
     */
    agentNum: number;
}
export declare class SaveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    save200ApplicationJSONString?: string;
}
