import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSalesTaxSecurity extends SpeakeasyBase {
    apiAuth: string;
}
export declare class DeleteSalesTaxRequest extends SpeakeasyBase {
    /**
     * This path parameter specifies the two-letter <a href="https://www.iso.org/iso-3166-country-codes.html " title="https://www.iso.org " target="_blank">ISO 3166</a> code for the country whose sales tax table entry you want to delete.
     */
    countryCode: string;
    /**
     * This path parameter specifies the ID of the sales tax jurisdiction whose table entry you want to delete. Retrieve valid jurisdiction IDs using <b>getSalesTaxJurisdictions</b> in the Metadata API.
     */
    jurisdictionId: string;
}
export declare class DeleteSalesTaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
