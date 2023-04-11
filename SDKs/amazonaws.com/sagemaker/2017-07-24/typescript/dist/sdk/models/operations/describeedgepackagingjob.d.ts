import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEdgePackagingJobXAmzTargetEnum {
    SageMakerDescribeEdgePackagingJob = "SageMaker.DescribeEdgePackagingJob"
}
export declare class DescribeEdgePackagingJobRequest extends SpeakeasyBase {
    describeEdgePackagingJobRequest: shared.DescribeEdgePackagingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEdgePackagingJobXAmzTargetEnum;
}
export declare class DescribeEdgePackagingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEdgePackagingJobResponse?: shared.DescribeEdgePackagingJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
