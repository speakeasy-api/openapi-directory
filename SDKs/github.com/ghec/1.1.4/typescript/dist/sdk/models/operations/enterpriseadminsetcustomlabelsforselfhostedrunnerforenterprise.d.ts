import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
     */
    labels: string[];
}
export declare class EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseRequestBody;
    /**
     * The slug version of the enterprise name. You can also substitute this value with the enterprise id.
     */
    enterprise: string;
    /**
     * Unique identifier of the self-hosted runner.
     */
    runnerId: number;
}
/**
 * Response
 */
export declare class EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    enterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise200ApplicationJSONObject?: EnterpriseAdminSetCustomLabelsForSelfHostedRunnerForEnterprise200ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
