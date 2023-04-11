import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeStreamProcessorXAmzTargetEnum {
    RekognitionServiceDescribeStreamProcessor = "RekognitionService.DescribeStreamProcessor"
}
export declare class DescribeStreamProcessorRequest extends SpeakeasyBase {
    describeStreamProcessorRequest: shared.DescribeStreamProcessorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStreamProcessorXAmzTargetEnum;
}
export declare class DescribeStreamProcessorResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    describeStreamProcessorResponse?: shared.DescribeStreamProcessorResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
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
}
