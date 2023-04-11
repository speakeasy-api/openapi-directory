import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAssessmentTargetsXAmzTargetEnum {
    InspectorServiceDescribeAssessmentTargets = "InspectorService.DescribeAssessmentTargets"
}
export declare class DescribeAssessmentTargetsRequest extends SpeakeasyBase {
    describeAssessmentTargetsRequest: shared.DescribeAssessmentTargetsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssessmentTargetsXAmzTargetEnum;
}
export declare class DescribeAssessmentTargetsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAssessmentTargetsResponse?: shared.DescribeAssessmentTargetsResponse;
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
