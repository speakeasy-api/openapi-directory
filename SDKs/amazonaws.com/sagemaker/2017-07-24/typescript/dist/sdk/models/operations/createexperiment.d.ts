import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateExperimentXAmzTargetEnum {
    SageMakerCreateExperiment = "SageMaker.CreateExperiment"
}
export declare class CreateExperimentRequest extends SpeakeasyBase {
    createExperimentRequest: shared.CreateExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateExperimentXAmzTargetEnum;
}
export declare class CreateExperimentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createExperimentResponse?: shared.CreateExperimentResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
