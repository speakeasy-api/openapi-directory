import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopHyperParameterTuningJobXAmzTargetEnum {
    SageMakerStopHyperParameterTuningJob = "SageMaker.StopHyperParameterTuningJob"
}
export declare class StopHyperParameterTuningJobRequest extends SpeakeasyBase {
    stopHyperParameterTuningJobRequest: shared.StopHyperParameterTuningJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopHyperParameterTuningJobXAmzTargetEnum;
}
export declare class StopHyperParameterTuningJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
