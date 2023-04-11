import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MarketplacesChannelCatalogsPublications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch the publication history for an account, sorted by descending start date
     */
    getPublications(req: operations.GetPublicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetPublicationsResponse>;
    /**
     * [PREVIEW] Launch a publication of the catalog to the marketplace
     */
    publishCatalogToMarketplace(req: operations.PublishCatalogToMarketplaceRequest, config?: AxiosRequestConfig): Promise<operations.PublishCatalogToMarketplaceResponse>;
}
