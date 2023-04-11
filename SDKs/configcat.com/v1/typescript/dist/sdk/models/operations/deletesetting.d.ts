import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSettingRequest extends SpeakeasyBase {
    /**
     * The identifier of the Setting.
     */
    settingId: number;
}
export declare class DeleteSettingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
