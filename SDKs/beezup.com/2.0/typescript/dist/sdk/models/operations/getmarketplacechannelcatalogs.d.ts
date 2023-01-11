import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMarketplaceChannelCatalogsQueryParams extends SpeakeasyBase {
    storeId?: string;
}
export declare class GetMarketplaceChannelCatalogsRequest extends SpeakeasyBase {
    queryParams: GetMarketplaceChannelCatalogsQueryParams;
}
export declare class GetMarketplaceChannelCatalogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    marketplaceChannelCatalogList?: shared.MarketplaceChannelCatalogList;
}
