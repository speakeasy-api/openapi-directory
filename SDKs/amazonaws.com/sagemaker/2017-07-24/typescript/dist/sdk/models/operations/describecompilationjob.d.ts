import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeCompilationJobXAmzTargetEnum {
    SageMakerDescribeCompilationJob = "SageMaker.DescribeCompilationJob"
}
export declare class DescribeCompilationJobRequest extends SpeakeasyBase {
    describeCompilationJobRequest: shared.DescribeCompilationJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCompilationJobXAmzTargetEnum;
}
export declare class DescribeCompilationJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeCompilationJobResponse?: shared.DescribeCompilationJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
