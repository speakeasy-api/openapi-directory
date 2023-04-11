import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SalesRepPostResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    salesRepPost200ApplicationJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
