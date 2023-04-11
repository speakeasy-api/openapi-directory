import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeHyperParameterTuningJobXAmzTargetEnum {
    SageMakerDescribeHyperParameterTuningJob = "SageMaker.DescribeHyperParameterTuningJob"
}
export declare class DescribeHyperParameterTuningJobRequest extends SpeakeasyBase {
    describeHyperParameterTuningJobRequest: shared.DescribeHyperParameterTuningJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHyperParameterTuningJobXAmzTargetEnum;
}
export declare class DescribeHyperParameterTuningJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeHyperParameterTuningJobResponse?: shared.DescribeHyperParameterTuningJobResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
