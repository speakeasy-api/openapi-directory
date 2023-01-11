import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogProductInfoListPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogProductInfoListRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogProductInfoListPathParams;
    request: shared.GetChannelCatalogProductInfoListRequest;
}
export declare class GetChannelCatalogProductInfoListResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalogProductInfoList?: shared.ChannelCatalogProductInfoList;
}
