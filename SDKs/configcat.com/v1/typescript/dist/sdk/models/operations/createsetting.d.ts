import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSettingRequest extends SpeakeasyBase {
    createSettingInitialValues: shared.CreateSettingInitialValues;
    /**
     * The identifier of the Config.
     */
    configId: string;
}
export declare class CreateSettingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * When the creation was successful.
     */
    settingModel?: shared.SettingModel;
    /**
     * When the creation was successful.
     */
    settingModelHaljson?: shared.SettingModelHaljson;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
