import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogMarketplacePropertiesPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogMarketplacePropertiesQueryParams extends SpeakeasyBase {
    redirectionPageUrl: string;
}
export declare class GetChannelCatalogMarketplacePropertiesHeaders extends SpeakeasyBase {
    acceptLanguage?: string[];
}
export declare class GetChannelCatalogMarketplacePropertiesRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogMarketplacePropertiesPathParams;
    queryParams: GetChannelCatalogMarketplacePropertiesQueryParams;
    headers: GetChannelCatalogMarketplacePropertiesHeaders;
}
export declare class GetChannelCatalogMarketplacePropertiesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    channelCatalogMarketplaceProperties?: shared.ChannelCatalogMarketplaceProperties;
}
