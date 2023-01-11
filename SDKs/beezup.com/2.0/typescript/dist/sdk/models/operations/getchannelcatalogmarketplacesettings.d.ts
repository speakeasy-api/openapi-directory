import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogMarketplaceSettingsPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogMarketplaceSettingsRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogMarketplaceSettingsPathParams;
}
export declare class GetChannelCatalogMarketplaceSettingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    channelCatalogMarketplaceSettings?: shared.ChannelCatalogMarketplaceSettings;
}
