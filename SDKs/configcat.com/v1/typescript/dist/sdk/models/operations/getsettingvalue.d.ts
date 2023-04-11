import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingValueRequest extends SpeakeasyBase {
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
    /**
     * The id of the Setting.
     */
    settingId: number;
}
export declare class GetSettingValueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When everything is ok, the setting value data returned.
     */
    settingValueModel?: shared.SettingValueModel;
    /**
     * When everything is ok, the setting value data returned.
     */
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
