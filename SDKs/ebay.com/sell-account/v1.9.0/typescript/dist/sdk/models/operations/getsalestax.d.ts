import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSalesTaxSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class GetSalesTaxRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose sales tax table you want to retrieve.
     */
    countryCode: string;
    /**
     * This path parameter specifies the ID of the sales tax jurisdiction for the tax table entry you want to retrieve. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.
     */
    jurisdictionId: string;
}
export declare class GetSalesTaxResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    salesTax?: shared.SalesTax;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
