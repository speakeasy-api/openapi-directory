import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplaceSettingValueRequest extends SpeakeasyBase {
    updateSettingValueModel: shared.UpdateSettingValueModel;
    /**
     * The identifier of the Environment.
     */
    environmentId: string;
    /**
     * The reason note for the Audit Log if the Product's "Config changes require a reason" preference is turned on.
     */
    reason?: string;
    /**
     * The id of the Setting.
     */
    settingId: number;
}
export declare class ReplaceSettingValueResponse extends SpeakeasyBase {
    contentType: string;
    settingValueModel?: shared.SettingValueModel;
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
