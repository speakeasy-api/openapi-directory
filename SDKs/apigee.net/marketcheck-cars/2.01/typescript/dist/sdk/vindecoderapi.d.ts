import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VINDecoderAPI {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * VIN Decoder
     *
     * @remarks
     * Get the basic information on specifications for a car identified by a valid VIN
     */
    decode(req: operations.DecodeRequest, config?: AxiosRequestConfig): Promise<operations.DecodeResponse>;
    /**
     * EPI VIN Decoder
     *
     * @remarks
     * Get the basic information on specifications for a car identified by a valid VIN from EPI's decoder
     */
    decodeViaEPI(req: operations.DecodeViaEPIRequest, config?: AxiosRequestConfig): Promise<operations.DecodeViaEPIResponse>;
    /**
     * NeoVIN Decoder
     *
     * @remarks
     * Get the basic information on specifications for a car identified by a valid VIN from NeoVIN decoder
     */
    decodeViaNeoVIN(req: operations.DecodeViaNeoVINRequest, config?: AxiosRequestConfig): Promise<operations.DecodeViaNeoVINResponse>;
    /**
     * API for getting terms from taxonomy
     *
     * @remarks
     * Facets on taxonomy
     */
    getTaxonomyTerms(req: operations.GetTaxonomyTermsRequest, config?: AxiosRequestConfig): Promise<operations.GetTaxonomyTermsResponse>;
    /**
     * API for auto-completion of inputs based on taxonomy
     *
     * @remarks
     * Auto-complete the inputs of your end users, not from active set but from taxonomy (decoder database)
     */
    getSpecsCarAutoComplete(req: operations.GetSpecsCarAutoCompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetSpecsCarAutoCompleteResponse>;
}
