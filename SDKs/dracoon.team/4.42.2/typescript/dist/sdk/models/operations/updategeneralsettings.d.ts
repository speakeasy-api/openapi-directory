import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateGeneralSettingsRequest extends SpeakeasyBase {
    updateGeneralSettings: shared.UpdateGeneralSettings;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateGeneralSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    generalSettings?: shared.GeneralSettings;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
