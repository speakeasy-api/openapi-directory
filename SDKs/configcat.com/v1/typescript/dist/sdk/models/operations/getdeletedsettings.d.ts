import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDeletedSettingsRequest extends SpeakeasyBase {
    /**
     * The identifier of the Config.
     */
    configId: string;
}
export declare class GetDeletedSettingsResponse extends SpeakeasyBase {
    contentType: string;
    settingModelHaljsons?: shared.SettingModelHaljson[];
    settingModels?: shared.SettingModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
