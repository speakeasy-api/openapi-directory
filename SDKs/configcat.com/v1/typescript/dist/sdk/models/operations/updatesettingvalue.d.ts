import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSettingValueRequest extends SpeakeasyBase {
    jsonPatchInput: shared.JsonPatchInput;
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
export declare class UpdateSettingValueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When the patch was successful.
     */
    settingValueModel?: shared.SettingValueModel;
    /**
     * When the patch was successful.
     */
    settingValueModelHaljson?: shared.SettingValueModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
