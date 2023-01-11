import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogProductsCountersPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogProductsCountersRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogProductsCountersPathParams;
}
export declare class GetChannelCatalogProductsCountersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalogProductsCounters?: shared.ChannelCatalogProductsCounters;
}
