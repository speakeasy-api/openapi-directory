import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ResubscribeSecurity extends SpeakeasyBase {
    accountAuth: string;
}
export declare class ResubscribeRequest extends SpeakeasyBase {
    /**
     * Language code for the preferred language to be returned in the response.
     *
     * @remarks
     *
     * Parameter value is case-insensitive and should be
     *   - a valid 2 letter language code without region such as en, de
     *   - or with region such as en_us, en_au
     *
     * If undefined then defaults to 'en', unless the server has been configured
     * with a custom default.
     *
     * See https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
     *
     */
    lang?: string;
    /**
     * The id of the plan to renew.
     */
    planId: string;
    /**
     * The identifier of the payment platform (stripe/itunes). Only stripe is currently supported.
     */
    platform: string;
}
export declare class ResubscribeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success. The response body is the updated plan information.
     */
    resubscribe200ApplicationJSONObject?: Record<string, any>;
}
