import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateLabelingJobXAmzTargetEnum {
    SageMakerCreateLabelingJob = "SageMaker.CreateLabelingJob"
}
export declare class CreateLabelingJobRequest extends SpeakeasyBase {
    createLabelingJobRequest: shared.CreateLabelingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLabelingJobXAmzTargetEnum;
}
export declare class CreateLabelingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createLabelingJobResponse?: shared.CreateLabelingJobResponse;
    /**
     * ResourceInUse
     */
    resourceInUse?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
}
