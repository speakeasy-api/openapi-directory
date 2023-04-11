import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DisplayAds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * display ads
     *
     * @remarks
     * This endpoint allows the client to retrieve a list of all display ads.
     */
    getApiDisplayAds(config?: AxiosRequestConfig): Promise<operations.GetApiDisplayAdsResponse>;
    /**
     * display ad
     *
     * @remarks
     * This endpoint allows the client to retrieve a single display ad, via its id.
     */
    getApiDisplayAdsId(req: operations.GetApiDisplayAdsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiDisplayAdsIdResponse>;
    /**
     * display ads
     *
     * @remarks
     * This endpoint allows the client to create a new display ad.
     */
    postApiDisplayAds(req: operations.PostApiDisplayAdsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostApiDisplayAdsResponse>;
    /**
     * display ads
     *
     * @remarks
     * This endpoint allows the client to update the attributes of a single display ad, via its id.
     */
    putApiDisplayAdsId(req: operations.PutApiDisplayAdsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutApiDisplayAdsIdResponse>;
    /**
     * unpublish
     *
     * @remarks
     * This endpoint allows the client to remove a display ad from rotation by un-publishing it.
     */
    putApiDisplayAdsIdUnpublish(req: operations.PutApiDisplayAdsIdUnpublishRequest, config?: AxiosRequestConfig): Promise<operations.PutApiDisplayAdsIdUnpublishResponse>;
}
