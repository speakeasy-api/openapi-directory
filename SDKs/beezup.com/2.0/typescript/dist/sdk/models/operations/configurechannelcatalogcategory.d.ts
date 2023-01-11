import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureChannelCatalogCategoryPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class ConfigureChannelCatalogCategoryRequest extends SpeakeasyBase {
    pathParams: ConfigureChannelCatalogCategoryPathParams;
    request: shared.ConfigureCategoryRequest;
}
export declare class ConfigureChannelCatalogCategoryResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
