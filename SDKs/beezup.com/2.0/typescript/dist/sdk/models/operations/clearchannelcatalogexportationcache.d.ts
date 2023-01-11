import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClearChannelCatalogExportationCachePathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class ClearChannelCatalogExportationCacheRequest extends SpeakeasyBase {
    pathParams: ClearChannelCatalogExportationCachePathParams;
}
export declare class ClearChannelCatalogExportationCacheResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
