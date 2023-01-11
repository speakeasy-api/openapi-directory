import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetChannelCatalogMarketplaceSettingsPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class SetChannelCatalogMarketplaceSettingsRequest extends SpeakeasyBase {
    pathParams: SetChannelCatalogMarketplaceSettingsPathParams;
    request: shared.SetChannelCatalogMarketplaceSettingsRequest;
}
export declare class SetChannelCatalogMarketplaceSettingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
