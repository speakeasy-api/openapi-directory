import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestBody extends SpeakeasyBase {
    /**
     * The names of the custom labels to add to the runner.
     */
    labels: string[];
}
export declare class EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequest extends SpeakeasyBase {
    requestBody: EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseRequestBody;
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
export declare class EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise200ApplicationJSON extends SpeakeasyBase {
    labels: shared.RunnerLabel[];
    totalCount: number;
}
export declare class EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterpriseResponse extends SpeakeasyBase {
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
    enterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise200ApplicationJSONObject?: EnterpriseAdminAddCustomLabelsToSelfHostedRunnerForEnterprise200ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationErrorSimple?: shared.ValidationErrorSimple;
}
