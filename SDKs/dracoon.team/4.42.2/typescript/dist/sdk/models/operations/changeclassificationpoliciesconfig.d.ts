import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeClassificationPoliciesConfigRequest extends SpeakeasyBase {
    updateClassificationPoliciesConfig: shared.UpdateClassificationPoliciesConfig;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class ChangeClassificationPoliciesConfigResponse extends SpeakeasyBase {
    /**
     * OK
     */
    classificationPoliciesConfig?: shared.ClassificationPoliciesConfig;
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
