import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureChannelCatalogGeneralSettingsPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class ConfigureChannelCatalogGeneralSettingsRequest extends SpeakeasyBase {
    pathParams: ConfigureChannelCatalogGeneralSettingsPathParams;
    request: shared.GeneralSettings;
}
export declare class ConfigureChannelCatalogGeneralSettingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
