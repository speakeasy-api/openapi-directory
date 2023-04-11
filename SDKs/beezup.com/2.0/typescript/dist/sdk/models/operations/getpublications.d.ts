import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetPublicationsPublicationTypesEnum {
    PublishProducts = "PublishProducts",
    PublishOffers = "PublishOffers",
    Unpublish = "Unpublish",
    PublishRelationshipsEnum = "PublishRelationshipsEnum",
    PublishProductImagesEnum = "PublishProductImagesEnum",
    PublishInventoryEnum = "PublishInventoryEnum",
    PublishPricingEnum = "PublishPricingEnum"
}
export declare class GetPublicationsRequest extends SpeakeasyBase {
    /**
     * Account Id to query (required)
     */
    accountId: number;
    /**
     * Channel Catalog Id by which to filter (optional)
     */
    channelCatalogId?: string;
    /**
     * Amount of entries to fetch (optional, default set to 10)
     */
    count?: number;
    /**
     * Marketplace Technical Code to query (required)
     */
    marketplaceTechnicalCode: string;
    /**
     * Publication types by which to filter (optional)
     */
    publicationTypes: GetPublicationsPublicationTypesEnum[];
}
export declare class GetPublicationsResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully fetched channel catalog settings
     */
    accountPublications?: shared.AccountPublications;
}
