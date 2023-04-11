import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CustomersPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customersPost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
