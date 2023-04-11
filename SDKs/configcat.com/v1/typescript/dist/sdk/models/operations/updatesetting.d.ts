import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSettingRequest extends SpeakeasyBase {
    jsonPatchInput: shared.JsonPatchInput;
    /**
     * The identifier of the Setting.
     */
    settingId: number;
}
export declare class UpdateSettingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When the update was successful.
     */
    settingModel?: shared.SettingModel;
    /**
     * When the update was successful.
     */
    settingModelHaljson?: shared.SettingModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
