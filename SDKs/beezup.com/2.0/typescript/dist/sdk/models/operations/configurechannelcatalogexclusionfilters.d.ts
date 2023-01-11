import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureChannelCatalogExclusionFiltersPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class ConfigureChannelCatalogExclusionFiltersRequest extends SpeakeasyBase {
    pathParams: ConfigureChannelCatalogExclusionFiltersPathParams;
    request: shared.ExclusionFilter[];
}
export declare class ConfigureChannelCatalogExclusionFiltersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
