import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSalesTaxJurisdictionsSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetSalesTaxJurisdictionsRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> country code for the country whose jurisdictions you want to retrieve. eBay provides sales tax jurisdiction information for Canada and the United States.Valid values for this path parameter are <code>CA</code> and <code>US</code>.
     */
    countryCode: string;
}
export declare class GetSalesTaxJurisdictionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    salesTaxJurisdictions?: shared.SalesTaxJurisdictions;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
