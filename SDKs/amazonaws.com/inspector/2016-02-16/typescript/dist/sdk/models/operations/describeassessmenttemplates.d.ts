import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeAssessmentTemplatesXAmzTargetEnum {
    InspectorServiceDescribeAssessmentTemplates = "InspectorService.DescribeAssessmentTemplates"
}
export declare class DescribeAssessmentTemplatesRequest extends SpeakeasyBase {
    describeAssessmentTemplatesRequest: shared.DescribeAssessmentTemplatesRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAssessmentTemplatesXAmzTargetEnum;
}
export declare class DescribeAssessmentTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeAssessmentTemplatesResponse?: shared.DescribeAssessmentTemplatesResponse;
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
