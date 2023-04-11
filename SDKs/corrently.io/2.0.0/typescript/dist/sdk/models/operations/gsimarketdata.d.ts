import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GsiMarketdataRequest extends SpeakeasyBase {
    /**
     * Zipcode (Postleitzahl) of a city in Germany.
     */
    zip?: string;
}
/**
 * Success
 */
export declare class GsiMarketdata200ApplicationJSON extends SpeakeasyBase {
    /**
     * Energyprice for the upcomming hours
     */
    data?: shared.MarketData[];
}
export declare class GsiMarketdataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    gsiMarketdata200ApplicationJSONObject?: GsiMarketdata200ApplicationJSON;
}
