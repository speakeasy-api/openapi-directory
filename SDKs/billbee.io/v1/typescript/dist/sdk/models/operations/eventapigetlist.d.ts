import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EventApiGetListRequest extends SpeakeasyBase {
    /**
     * Specifies the newest date to include in the response
     */
    maxDate?: Date;
    /**
     * Specifies the oldest date to include in the response
     */
    minDate?: Date;
    /**
     * Filter for specific order id
     */
    orderId?: number;
    /**
     * Specifies the page to request
     */
    page?: number;
    /**
     * Specifies the pagesize. Defaults to 50, max value is 250
     */
    pageSize?: number;
    /**
     * Filter for specific event types
     */
    typeId?: number[];
}
export declare class EventApiGetListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    eventApiGetList200ApplicationJSONObject?: Record<string, any>;
    /**
     * OK
     */
    eventApiGetList200TextJSONObject?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
