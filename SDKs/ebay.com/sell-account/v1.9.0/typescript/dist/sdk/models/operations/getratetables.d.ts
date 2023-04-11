import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRateTablesSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetRateTablesRequest extends SpeakeasyBase {
    /**
     * This query parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code of country for which you want shipping rate table information. If you do not specify a country code, the request returns all of the seller's defined shipping rate tables for all eBay marketplaces. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum
     */
    countryCode?: string;
}
export declare class GetRateTablesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    rateTableResponse?: shared.RateTableResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
