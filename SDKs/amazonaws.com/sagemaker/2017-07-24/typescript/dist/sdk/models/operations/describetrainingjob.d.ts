import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTrainingJobXAmzTargetEnum {
    SageMakerDescribeTrainingJob = "SageMaker.DescribeTrainingJob"
}
export declare class DescribeTrainingJobRequest extends SpeakeasyBase {
    describeTrainingJobRequest: shared.DescribeTrainingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrainingJobXAmzTargetEnum;
}
export declare class DescribeTrainingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTrainingJobResponse?: shared.DescribeTrainingJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
