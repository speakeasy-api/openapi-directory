import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAutomationStepExecutionsXAmzTargetEnum {
    AmazonSSMDescribeAutomationStepExecutions = "AmazonSSM.DescribeAutomationStepExecutions"
}
export declare class DescribeAutomationStepExecutionsRequest extends SpeakeasyBase {
    describeAutomationStepExecutionsRequest: shared.DescribeAutomationStepExecutionsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAutomationStepExecutionsXAmzTargetEnum;
}
export declare class DescribeAutomationStepExecutionsResponse extends SpeakeasyBase {
    /**
     * AutomationExecutionNotFoundException
     */
    automationExecutionNotFoundException?: any;
    contentType: string;
    /**
     * Success
     */
    describeAutomationStepExecutionsResult?: shared.DescribeAutomationStepExecutionsResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidFilterKey
     */
    invalidFilterKey?: any;
    /**
     * InvalidFilterValue
     */
    invalidFilterValue?: any;
    /**
     * InvalidNextToken
     */
    invalidNextToken?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
