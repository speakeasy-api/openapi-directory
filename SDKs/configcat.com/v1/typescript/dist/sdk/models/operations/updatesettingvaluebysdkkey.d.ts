import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSettingValueBySdkkeyRequest extends SpeakeasyBase {
    jsonPatchInput: shared.JsonPatchInput;
    /**
     * The ConfigCat SDK Key. (https://app.configcat.com/sdkkey)
     */
    xConfigcatSdkkey?: string;
    /**
     * The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
     */
    reason?: string;
    /**
     * The key or id of the Setting.
     */
    settingKeyOrId: string;
}
export declare class UpdateSettingValueBySdkkeyResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
