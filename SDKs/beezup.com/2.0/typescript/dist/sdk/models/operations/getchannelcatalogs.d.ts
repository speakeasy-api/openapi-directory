import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogsQueryParams extends SpeakeasyBase {
    storeId?: string;
}
export declare class GetChannelCatalogsRequest extends SpeakeasyBase {
    queryParams: GetChannelCatalogsQueryParams;
}
export declare class GetChannelCatalogsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalogList?: shared.ChannelCatalogList;
}
