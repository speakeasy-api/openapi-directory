import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTrainingJobXAmzTargetEnum {
    SageMakerUpdateTrainingJob = "SageMaker.UpdateTrainingJob"
}
export declare class UpdateTrainingJobRequest extends SpeakeasyBase {
    updateTrainingJobRequest: shared.UpdateTrainingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTrainingJobXAmzTargetEnum;
}
export declare class UpdateTrainingJobResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    /**
     * Success
     */
    updateTrainingJobResponse?: shared.UpdateTrainingJobResponse;
}
