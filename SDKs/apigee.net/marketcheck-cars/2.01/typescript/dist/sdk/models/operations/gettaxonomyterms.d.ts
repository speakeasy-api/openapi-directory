import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTaxonomyTermsRequest extends SpeakeasyBase {
    /**
     * The API Authentication Key. Mandatory with all API calls.
     */
    apiKey?: string;
    /**
     * Body subtype to filter the listings on. Valid filter values are those that our Search facets API returns for unique body subtypes. You can pass in multiple body subtype values comma separated
     */
    bodySubtype?: string;
    /**
     * To filter listing on their body type
     */
    bodyType?: string;
    /**
     * To filter listing on their drivetrain
     */
    drivetrain?: string;
    /**
     * To filter listing on their engine
     */
    engine?: string;
    /**
     * Engine Block to match. Valid filter values are those that our Search facets API returns for unique Engine Block. You can pass in multiple Engine Block values comma separated
     */
    engineBlock?: string;
    /**
     * Engine Size to match. Valid filter values are those that our Search facets API returns for unique engine size. You can pass in multiple engine size values comma separated
     */
    engineSize?: string;
    /**
     * Comma separated list of fields to get terms for
     */
    field: string;
    /**
     * To filter listing on their fuel type
     */
    fuelType?: string;
    /**
     * To filter listings on their make
     */
    make?: string;
    /**
     * To filter listings on their model
     */
    model?: string;
    /**
     * To filter listing on their transmission
     */
    transmission?: string;
    /**
     * To filter listing on their trim
     */
    trim?: string;
    /**
     * To filter listing on their vehicle type
     */
    vehicleType?: string;
    /**
     * To filter listing on their year
     */
    year?: string;
}
export declare class GetTaxonomyTermsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error
     */
    error?: shared.ErrorT;
    /**
     * List of unique terms for specified fields
     */
    specsAutoCompleteResponse?: shared.SpecsAutoCompleteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
