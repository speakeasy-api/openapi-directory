import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTrainingJobXAmzTargetEnum {
    SageMakerCreateTrainingJob = "SageMaker.CreateTrainingJob"
}
export declare class CreateTrainingJobRequest extends SpeakeasyBase {
    createTrainingJobRequest: shared.CreateTrainingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTrainingJobXAmzTargetEnum;
}
export declare class CreateTrainingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTrainingJobResponse?: shared.CreateTrainingJobResponse;
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
