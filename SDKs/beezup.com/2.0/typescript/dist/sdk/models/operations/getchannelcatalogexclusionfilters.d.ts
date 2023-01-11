import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogExclusionFiltersPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class GetChannelCatalogExclusionFiltersRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogExclusionFiltersPathParams;
}
export declare class GetChannelCatalogExclusionFiltersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    exclusionFiltersResponse?: shared.ExclusionFiltersResponse;
}
