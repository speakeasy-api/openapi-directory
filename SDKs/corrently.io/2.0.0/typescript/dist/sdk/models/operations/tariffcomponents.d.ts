import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TariffcomponentsRequest extends SpeakeasyBase {
    /**
     * Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time
     */
    email?: string;
    /**
     * Total amount of energy in kilo-watt-hours per year. (sample 2100)
     */
    kwha?: number;
    /**
     * If provided all results will be scaled to this timeframe
     */
    milliseconds?: number;
    /**
     * If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.
     */
    wh?: number;
    /**
     * Zipcode (Postzleitzahl) of a city in Germany.
     */
    zipcode?: string;
}
export declare class TariffcomponentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    componentsh0?: shared.Componentsh0;
}
