import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingRequest extends SpeakeasyBase {
    /**
     * The identifier of the Setting.
     */
    settingId: number;
}
export declare class GetSettingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the setting data returned.
     */
    settingModel?: shared.SettingModel;
    /**
     * When everything is ok, the setting data returned.
     */
    settingModelHaljson?: shared.SettingModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
