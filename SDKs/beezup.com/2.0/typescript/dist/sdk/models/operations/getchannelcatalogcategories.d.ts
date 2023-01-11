import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogCategoriesPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogCategoriesRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogCategoriesPathParams;
}
export declare class GetChannelCatalogCategoriesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalogCategoryConfigurationList?: shared.ChannelCatalogCategoryConfigurationList;
}
