import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnumApiGetShippingCarriersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    enumApiGetShippingCarriers200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    enumApiGetShippingCarriers200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
