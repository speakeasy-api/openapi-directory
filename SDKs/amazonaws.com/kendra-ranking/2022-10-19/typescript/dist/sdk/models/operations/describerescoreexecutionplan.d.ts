import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeRescoreExecutionPlanXAmzTargetEnum {
    AWSKendraRerankingFrontendServiceDescribeRescoreExecutionPlan = "AWSKendraRerankingFrontendService.DescribeRescoreExecutionPlan"
}
export declare class DescribeRescoreExecutionPlanRequest extends SpeakeasyBase {
    describeRescoreExecutionPlanRequest: shared.DescribeRescoreExecutionPlanRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeRescoreExecutionPlanXAmzTargetEnum;
}
export declare class DescribeRescoreExecutionPlanResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeRescoreExecutionPlanResponse?: shared.DescribeRescoreExecutionPlanResponse;
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
     * ValidationException
     */
    validationException?: any;
}
