import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeReportCreationXAmzTargetEnum {
    ResourceGroupsTaggingAPI20170126DescribeReportCreation = "ResourceGroupsTaggingAPI_20170126.DescribeReportCreation"
}
export declare class DescribeReportCreationRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeReportCreationXAmzTargetEnum;
}
export declare class DescribeReportCreationResponse extends SpeakeasyBase {
    /**
     * ConstraintViolationException
     */
    constraintViolationException?: any;
    contentType: string;
    /**
     * Success
     */
    describeReportCreationOutput?: shared.DescribeReportCreationOutput;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
