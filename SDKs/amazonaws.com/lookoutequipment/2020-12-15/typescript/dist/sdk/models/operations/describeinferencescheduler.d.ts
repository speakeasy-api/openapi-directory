import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInferenceSchedulerXAmzTargetEnum {
    AWSLookoutEquipmentFrontendServiceDescribeInferenceScheduler = "AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler"
}
export declare class DescribeInferenceSchedulerRequest extends SpeakeasyBase {
    describeInferenceSchedulerRequest: shared.DescribeInferenceSchedulerRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInferenceSchedulerXAmzTargetEnum;
}
export declare class DescribeInferenceSchedulerResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeInferenceSchedulerResponse?: shared.DescribeInferenceSchedulerResponse;
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
