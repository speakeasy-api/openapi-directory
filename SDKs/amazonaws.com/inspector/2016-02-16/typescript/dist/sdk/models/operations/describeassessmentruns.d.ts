import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAssessmentRunsXAmzTargetEnum {
    InspectorServiceDescribeAssessmentRuns = "InspectorService.DescribeAssessmentRuns"
}
export declare class DescribeAssessmentRunsRequest extends SpeakeasyBase {
    describeAssessmentRunsRequest: shared.DescribeAssessmentRunsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssessmentRunsXAmzTargetEnum;
}
export declare class DescribeAssessmentRunsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAssessmentRunsResponse?: shared.DescribeAssessmentRunsResponse;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
