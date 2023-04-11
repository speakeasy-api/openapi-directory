import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Assessment execution schedule with 'Daily' or 'Disabled' values.
 */
export declare enum UpdateAppRequestBodyAssessmentScheduleEnum {
    Disabled = "Disabled",
    Daily = "Daily"
}
export declare class UpdateAppRequestBody extends SpeakeasyBase {
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn: string;
    /**
     *  Assessment execution schedule with 'Daily' or 'Disabled' values.
     */
    assessmentSchedule?: UpdateAppRequestBodyAssessmentScheduleEnum;
    /**
     * Specifies if the resiliency policy ARN should be cleared.
     */
    clearResiliencyPolicyArn?: boolean;
    /**
     * The optional description for an app.
     */
    description?: string;
    /**
     * The Amazon Resource Name (ARN) of the resiliency policy. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:resiliency-policy/<code>policy-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    policyArn?: string;
}
export declare class UpdateAppRequest extends SpeakeasyBase {
    requestBody: UpdateAppRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAppResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateAppResponse?: shared.UpdateAppResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
