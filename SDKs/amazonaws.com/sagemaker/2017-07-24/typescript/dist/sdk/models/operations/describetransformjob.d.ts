import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTransformJobXAmzTargetEnum {
    SageMakerDescribeTransformJob = "SageMaker.DescribeTransformJob"
}
export declare class DescribeTransformJobRequest extends SpeakeasyBase {
    describeTransformJobRequest: shared.DescribeTransformJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTransformJobXAmzTargetEnum;
}
export declare class DescribeTransformJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTransformJobResponse?: shared.DescribeTransformJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
