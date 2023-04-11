import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateProcessingJobXAmzTargetEnum {
    SageMakerCreateProcessingJob = "SageMaker.CreateProcessingJob"
}
export declare class CreateProcessingJobRequest extends SpeakeasyBase {
    createProcessingJobRequest: shared.CreateProcessingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateProcessingJobXAmzTargetEnum;
}
export declare class CreateProcessingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createProcessingJobResponse?: shared.CreateProcessingJobResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
