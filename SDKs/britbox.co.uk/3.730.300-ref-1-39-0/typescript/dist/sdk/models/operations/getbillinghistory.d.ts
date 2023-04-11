import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBillingHistorySecurity extends SpeakeasyBase {
    accountAuth: string;
}
export declare class GetBillingHistoryRequest extends SpeakeasyBase {
    /**
     * Details of a billing history request.
     */
    itvBillingHistoryRequest: shared.ItvBillingHistoryRequest;
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
     * The identifier of the payment platform (stripe/itunes).
     */
    platform: string;
}
export declare class GetBillingHistoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of billing records.
     */
    itvBillingHistory?: shared.ItvBillingHistory;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
