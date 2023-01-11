import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReenableChannelCatalogCategoryMappingPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class ReenableChannelCatalogCategoryMappingRequest extends SpeakeasyBase {
    pathParams: ReenableChannelCatalogCategoryMappingPathParams;
}
export declare class ReenableChannelCatalogCategoryMappingResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
