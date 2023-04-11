import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAutomationExecutionsXAmzTargetEnum {
    AmazonSSMDescribeAutomationExecutions = "AmazonSSM.DescribeAutomationExecutions"
}
export declare class DescribeAutomationExecutionsRequest extends SpeakeasyBase {
    describeAutomationExecutionsRequest: shared.DescribeAutomationExecutionsRequest;
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
    xAmzTarget: DescribeAutomationExecutionsXAmzTargetEnum;
}
export declare class DescribeAutomationExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAutomationExecutionsResult?: shared.DescribeAutomationExecutionsResult;
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
