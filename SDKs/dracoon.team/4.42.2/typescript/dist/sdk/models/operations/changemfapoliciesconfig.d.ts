import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeMfaPoliciesConfigRequest extends SpeakeasyBase {
    updateMfaPoliciesConfig: shared.UpdateMfaPoliciesConfig;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class ChangeMfaPoliciesConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    mfaPoliciesConfig?: shared.MfaPoliciesConfig;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
