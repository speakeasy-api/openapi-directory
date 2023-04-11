import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessSetEnabledRequest extends SpeakeasyBase {
    /**
     * indicator
     */
    enabledOrNot: string;
}
export declare class AccessSetEnabledResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    accessSetEnabled200ApplicationJSONString?: string;
}
