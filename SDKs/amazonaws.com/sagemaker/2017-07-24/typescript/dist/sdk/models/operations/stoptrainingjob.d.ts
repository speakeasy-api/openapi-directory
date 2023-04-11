import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopTrainingJobXAmzTargetEnum {
    SageMakerStopTrainingJob = "SageMaker.StopTrainingJob"
}
export declare class StopTrainingJobRequest extends SpeakeasyBase {
    stopTrainingJobRequest: shared.StopTrainingJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopTrainingJobXAmzTargetEnum;
}
export declare class StopTrainingJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
