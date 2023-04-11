import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeExperimentXAmzTargetEnum {
    SageMakerDescribeExperiment = "SageMaker.DescribeExperiment"
}
export declare class DescribeExperimentRequest extends SpeakeasyBase {
    describeExperimentRequest: shared.DescribeExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExperimentXAmzTargetEnum;
}
export declare class DescribeExperimentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeExperimentResponse?: shared.DescribeExperimentResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
