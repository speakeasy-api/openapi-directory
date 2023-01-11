import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPublicationsPathParams extends SpeakeasyBase {
    accountId: number;
    marketplaceTechnicalCode: string;
}
export declare enum GetPublicationsPublicationTypesEnum {
    PublishProducts = "PublishProducts",
    PublishOffers = "PublishOffers",
    Unpublish = "Unpublish"
}
export declare class GetPublicationsQueryParams extends SpeakeasyBase {
    channelCatalogId?: string;
    count?: number;
    publicationTypes: GetPublicationsPublicationTypesEnum[];
}
export declare class GetPublicationsRequest extends SpeakeasyBase {
    pathParams: GetPublicationsPathParams;
    queryParams: GetPublicationsQueryParams;
}
export declare class GetPublicationsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    accountPublications?: shared.AccountPublications;
}
