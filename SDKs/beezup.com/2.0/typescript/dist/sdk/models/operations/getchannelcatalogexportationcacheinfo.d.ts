import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogExportationCacheInfoPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogExportationCacheInfoRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogExportationCacheInfoPathParams;
}
export declare class GetChannelCatalogExportationCacheInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalogExportCacheInfoResponse?: shared.ChannelCatalogExportCacheInfoResponse;
}
