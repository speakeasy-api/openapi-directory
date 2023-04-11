import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeInferenceExperimentXAmzTargetEnum {
    SageMakerDescribeInferenceExperiment = "SageMaker.DescribeInferenceExperiment"
}
export declare class DescribeInferenceExperimentRequest extends SpeakeasyBase {
    describeInferenceExperimentRequest: shared.DescribeInferenceExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInferenceExperimentXAmzTargetEnum;
}
export declare class DescribeInferenceExperimentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeInferenceExperimentResponse?: shared.DescribeInferenceExperimentResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
