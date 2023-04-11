import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSalesTaxesSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetSalesTaxesRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose tax table you want to retrieve. For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/sell/account/types/ba:CountryCodeEnum
     */
    countryCode: string;
}
export declare class GetSalesTaxesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    salesTaxes?: shared.SalesTaxes;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
