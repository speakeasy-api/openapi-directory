import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStackSummaryXAmzTargetEnum {
    OpsWorks20130218DescribeStackSummary = "OpsWorks_20130218.DescribeStackSummary"
}
export declare class DescribeStackSummaryRequest extends SpeakeasyBase {
    describeStackSummaryRequest: shared.DescribeStackSummaryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStackSummaryXAmzTargetEnum;
}
export declare class DescribeStackSummaryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeStackSummaryResult?: shared.DescribeStackSummaryResult;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
