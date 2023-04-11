import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSettingValueBySdkkeyRequest extends SpeakeasyBase {
    /**
     * The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
     */
    xConfigcatSdkkey?: string;
    /**
     * The key or id of the Setting.
     */
    settingKeyOrId: string;
}
export declare class GetSettingValueBySdkkeyResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
