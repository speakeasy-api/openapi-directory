import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Inventory type for which sales count is to be searched, default is used
 */
export declare enum GetSalesCountCarTypeEnum {
    New = "new",
    Used = "used"
}
/**
 * Country for which the sales records are to be searched
 */
export declare enum GetSalesCountCountryEnum {
    UsLower = "us",
    CaLower = "ca",
    UsUpper = "US",
    CaUpper = "CA"
}
export declare class GetSalesCountRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Inventory type for which sales count is to be searched, default is used
     */
    carType?: GetSalesCountCarTypeEnum;
    /**
     * City level sales count, pipe seperated like city_state=jacksonville|FL
     */
    cityState?: string;
    /**
     * Country for which the sales records are to be searched
     */
    country?: GetSalesCountCountryEnum;
    /**
     * Make for which sales count is to be searched
     */
    make?: string;
    /**
     * Make-Model for which sales count is to be searched, pipe seperated like mm=ford|f-150
     */
    mm?: string;
    /**
     * State level sales count
     */
    state?: string;
    /**
     * taxonomy_vin for which sales count is to be searched
     */
    taxonomyVin?: string;
    /**
     * VIN that will be transformed to taxonomy_vin
     */
    vin?: string;
    /**
     * Year-Make-Model for which sales count is to be searched, pipe seperated like ymm=2015|ford|f-150
     */
    ymm?: string;
    /**
     * Year-Make-Model-Trim for which sales count is to be searched, pipe seperated like ymmt=2015|ford|f-150|platinum
     */
    ymmt?: string;
}
export declare class GetSalesCountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * Sales count for given parameters
     */
    sales?: shared.Sales;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
