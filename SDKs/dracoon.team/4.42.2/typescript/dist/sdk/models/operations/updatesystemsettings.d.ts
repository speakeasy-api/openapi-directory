import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSystemSettingsRequest extends SpeakeasyBase {
    configOptionList: shared.ConfigOptionList;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class UpdateSystemSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
