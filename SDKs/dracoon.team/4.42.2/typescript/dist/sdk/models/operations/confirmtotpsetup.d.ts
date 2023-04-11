import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfirmTotpSetupRequest extends SpeakeasyBase {
    mfaTotpConfirmationRequest: shared.MfaTotpConfirmationRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class ConfirmTotpSetupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
