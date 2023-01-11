import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableChannelCatalogCategoryMappingPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class DisableChannelCatalogCategoryMappingRequest extends SpeakeasyBase {
    pathParams: DisableChannelCatalogCategoryMappingPathParams;
}
export declare class DisableChannelCatalogCategoryMappingResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
