import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingsByTagRequest extends SpeakeasyBase {
    /**
     * The identifier of the Tag.
     */
    tagId: number;
}
export declare class GetSettingsByTagResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the settings data returned.
     */
    settingModelHaljsons?: shared.SettingModelHaljson[];
    /**
     * When everything is ok, the settings data returned.
     */
    settingModels?: shared.SettingModel[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
