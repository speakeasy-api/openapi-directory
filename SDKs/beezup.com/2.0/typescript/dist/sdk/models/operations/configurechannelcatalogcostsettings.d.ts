import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureChannelCatalogCostSettingsPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class ConfigureChannelCatalogCostSettingsRequest extends SpeakeasyBase {
    pathParams: ConfigureChannelCatalogCostSettingsPathParams;
    request: shared.CostSettings;
}
export declare class ConfigureChannelCatalogCostSettingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
