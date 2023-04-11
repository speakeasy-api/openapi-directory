import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetSettingsRequest extends SpeakeasyBase {
    customerSettingsRequest: shared.CustomerSettingsRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class SetSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerSettingsResponse?: shared.CustomerSettingsResponse;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
