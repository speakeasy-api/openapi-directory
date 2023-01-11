import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StaticData {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBrandNamesGetBrandsGet - Get a list of brand names
     *
     * Get vehicle brand names.
     *
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    getBrandNamesGetBrandsGet(req: operations.GetBrandNamesGetBrandsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetBrandNamesGetBrandsGetResponse>;
    /**
     * getModelNamesAllGetInactiveModelsGet - Get a list of model names including discontinued models
     *
     * Get all model names including discontinued models. Because these models are no longer built, or have very poor market performance
     * they are not incuded in the normal getModels endpoint. Many users itterate through the model names with our new vehicle sales
     * endpoints and waste some of their quota making self contradictory requests. This endpoint was created to aleviate the use case where
     * someone requests information on new vehicle sales for a model that has not been sold new for a long, long, time.
     *
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    getModelNamesAllGetInactiveModelsGet(req: operations.GetModelNamesAllGetInactiveModelsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetModelNamesAllGetInactiveModelsGetResponse>;
    /**
     * getModelNamesGetModelsGet - Get a list of model names
     *
     * Get brand model names for currently active models. This endpoint does not return model names that have been discontinued or have
     * sold less than 10 vehicles in the last month and a half.
     *
     * These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    getModelNamesGetModelsGet(req: operations.GetModelNamesGetModelsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetModelNamesGetModelsGetResponse>;
    /**
     * getRegionsGetRegionsGet - Get a list of region names
     *
     * Get region names. These names are used as arguments for other endpoints. The names are generally not case sensitive
     * when used with other endpoints, but it is best practice to use the names returned by this endpoint without changes.
    **/
    getRegionsGetRegionsGet(req: operations.GetRegionsGetRegionsGetRequest, config?: AxiosRequestConfig): Promise<operations.GetRegionsGetRegionsGetResponse>;
}
