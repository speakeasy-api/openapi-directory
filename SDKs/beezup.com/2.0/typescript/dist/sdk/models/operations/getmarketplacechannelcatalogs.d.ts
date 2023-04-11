import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMarketplaceChannelCatalogsRequest extends SpeakeasyBase {
    /**
     * The StoreId to filter by
     */
    storeId?: string;
}
export declare class GetMarketplaceChannelCatalogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Marketplace channel catalog list
     */
    marketplaceChannelCatalogList?: shared.MarketplaceChannelCatalogList;
}
