import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The current status of compliance for the resiliency policy.
 */
export declare enum ListAppAssessmentsComplianceStatusEnum {
    PolicyBreached = "PolicyBreached",
    PolicyMet = "PolicyMet"
}
/**
 * Specifies the entity that invoked a specific assessment, either a <code>User</code> or the <code>System</code>.
 */
export declare enum ListAppAssessmentsInvokerEnum {
    User = "User",
    System = "System"
}
export declare class ListAppAssessmentsRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The Amazon Resource Name (ARN) of the AWS Resilience Hub application. The format for this ARN is: arn:<code>partition</code>:resiliencehub:<code>region</code>:<code>account</code>:app/<code>app-id</code>. For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html"> Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i> guide.
     */
    appArn?: string;
    /**
     * The name for the assessment.
     */
    assessmentName?: string;
    /**
     * The current status of the assessment for the resiliency policy.
     */
    assessmentStatus?: shared.AssessmentStatusEnum[];
    /**
     * The current status of compliance for the resiliency policy.
     */
    complianceStatus?: ListAppAssessmentsComplianceStatusEnum;
    /**
     * Specifies the entity that invoked a specific assessment, either a <code>User</code> or the <code>System</code>.
     */
    invoker?: ListAppAssessmentsInvokerEnum;
    /**
     * The maximum number of results to include in the response. If more results exist than the specified <code>MaxResults</code> value, a token is included in the response so that the remaining results can be retrieved.
     */
    maxResults?: number;
    /**
     * Null, or the token from a previous call to get the next set of results.
     */
    nextToken?: string;
    /**
     * The default is to sort by ascending <b>startTime</b>. To sort by descending <b>startTime</b>, set reverseOrder to <code>true</code>.
     */
    reverseOrder?: boolean;
}
export declare class ListAppAssessmentsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listAppAssessmentsResponse?: shared.ListAppAssessmentsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
