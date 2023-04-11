import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateOrReplaceSalesTaxSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class CreateOrReplaceSalesTaxRequest extends SpeakeasyBase {
    /**
     * A container that describes the how the sales tax is calculated.
     */
    salesTaxBase: shared.SalesTaxBase;
    /**
     * This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country for which you want to create a sales tax table entry.
     */
    countryCode: string;
    /**
     * This path parameter specifies the ID of the tax jurisdiction for the table entry you want to create. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.
     */
    jurisdictionId: string;
}
export declare class CreateOrReplaceSalesTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
