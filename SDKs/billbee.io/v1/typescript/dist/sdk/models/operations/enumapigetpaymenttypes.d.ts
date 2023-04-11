import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EnumApiGetPaymentTypesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    enumApiGetPaymentTypes200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    enumApiGetPaymentTypes200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
