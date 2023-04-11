import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnumApiGetOrderStatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    enumApiGetOrderStates200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    enumApiGetOrderStates200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
