import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCatalogMarketplaceSettingsRequest extends SpeakeasyBase {
    /**
     * Channel Catalog Id to query (required)
     */
    channelCatalogId: string;
}
export declare class GetChannelCatalogMarketplaceSettingsResponse extends SpeakeasyBase {
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
    channelCatalogMarketplaceSettings?: shared.ChannelCatalogMarketplaceSettings;
}
