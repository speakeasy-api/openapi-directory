import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogPathParams;
}
export declare class GetChannelCatalogResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalog?: shared.ChannelCatalog;
}
