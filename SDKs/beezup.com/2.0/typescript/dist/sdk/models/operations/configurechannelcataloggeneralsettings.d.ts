import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureChannelCatalogGeneralSettingsRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
    generalSettings: shared.GeneralSettings;
}
export declare class ConfigureChannelCatalogGeneralSettingsResponse extends SpeakeasyBase {
    /**
     * Occurs when a user tries to work on the wrong ChanelCatalogId.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
