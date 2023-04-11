import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestClassificationPoliciesConfigRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class RequestClassificationPoliciesConfigResponse extends SpeakeasyBase {
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
