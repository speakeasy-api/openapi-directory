import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MigrateLegacyTrackingChannelCatalogPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class MigrateLegacyTrackingChannelCatalogRequest extends SpeakeasyBase {
    pathParams: MigrateLegacyTrackingChannelCatalogPathParams;
}
export declare class MigrateLegacyTrackingChannelCatalogResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
