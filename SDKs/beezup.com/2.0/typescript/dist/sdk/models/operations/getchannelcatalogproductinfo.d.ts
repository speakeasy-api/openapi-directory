import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogProductInfoPathParams extends SpeakeasyBase {
    channelCatalogId: string;
    productId: string;
}
export declare class GetChannelCatalogProductInfoRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogProductInfoPathParams;
}
export declare class GetChannelCatalogProductInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalogProductInfo?: shared.ChannelCatalogProductInfo;
}
