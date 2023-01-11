import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLegacyTrackingChannelCatalogPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetLegacyTrackingChannelCatalogRequest extends SpeakeasyBase {
    pathParams: GetLegacyTrackingChannelCatalogPathParams;
}
export declare class GetLegacyTrackingChannelCatalogResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    legacyTrackingChannelCatalog?: shared.LegacyTrackingChannelCatalog;
}
