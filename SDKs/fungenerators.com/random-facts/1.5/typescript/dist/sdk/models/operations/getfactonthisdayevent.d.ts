import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetFactOnthisdayEventSecurity extends SpeakeasyBase {
    xFungeneratorsApiSecret: string;
}
export declare class GetFactOnthisdayEventRequest extends SpeakeasyBase {
    /**
     * Optional day of the month (1- 28/30/31 based on the month). Defaults to current day of the month.
     */
    day?: string;
    /**
     * Optional month (1-12). Defaults to current month
     */
    month?: string;
}
export declare class GetFactOnthisdayEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
