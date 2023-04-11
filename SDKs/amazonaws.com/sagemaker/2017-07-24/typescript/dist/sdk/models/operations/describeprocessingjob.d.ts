import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeProcessingJobXAmzTargetEnum {
    SageMakerDescribeProcessingJob = "SageMaker.DescribeProcessingJob"
}
export declare class DescribeProcessingJobRequest extends SpeakeasyBase {
    describeProcessingJobRequest: shared.DescribeProcessingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProcessingJobXAmzTargetEnum;
}
export declare class DescribeProcessingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeProcessingJobResponse?: shared.DescribeProcessingJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
