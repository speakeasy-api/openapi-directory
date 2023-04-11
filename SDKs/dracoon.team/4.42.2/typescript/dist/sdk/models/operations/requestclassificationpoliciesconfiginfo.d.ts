import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestClassificationPoliciesConfigInfoRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RequestClassificationPoliciesConfigInfoResponse extends SpeakeasyBase {
    /**
     * OK
     */
    classificationPoliciesConfig?: shared.ClassificationPoliciesConfig;
    contentType: string;
    /**
     * Unauthorized
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
