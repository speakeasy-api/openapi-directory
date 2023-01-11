import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VinDecoderApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * decode - VIN Decoder
     *
     * Get the basic information on specifications for a car identified by a valid VIN
    **/
    decode(req: operations.DecodeRequest, config?: AxiosRequestConfig): Promise<operations.DecodeResponse>;
    /**
     * decodeViaEpi - EPI VIN Decoder
     *
     * Get the basic information on specifications for a car identified by a valid VIN from EPI's decoder
    **/
    decodeViaEpi(req: operations.DecodeViaEpiRequest, config?: AxiosRequestConfig): Promise<operations.DecodeViaEpiResponse>;
    /**
     * getTaxonomyTerms - API for getting terms from taxonomy
     *
     * Facets on taxonomy
    **/
    getTaxonomyTerms(req: operations.GetTaxonomyTermsRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxonomyTermsResponse>;
    /**
     * getSpecsCarAutoComplete - API for auto-completion of inputs based on taxonomy
     *
     * Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)
    **/
    getSpecsCarAutoComplete(req: operations.GetSpecsCarAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecsCarAutoCompleteResponse>;
}
