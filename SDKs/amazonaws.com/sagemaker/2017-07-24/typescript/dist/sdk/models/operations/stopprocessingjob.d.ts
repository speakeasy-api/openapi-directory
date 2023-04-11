import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopProcessingJobXAmzTargetEnum {
    SageMakerStopProcessingJob = "SageMaker.StopProcessingJob"
}
export declare class StopProcessingJobRequest extends SpeakeasyBase {
    stopProcessingJobRequest: shared.StopProcessingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopProcessingJobXAmzTargetEnum;
}
export declare class StopProcessingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
