import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateExperimentXAmzTargetEnum {
    SageMakerUpdateExperiment = "SageMaker.UpdateExperiment"
}
export declare class UpdateExperimentRequest extends SpeakeasyBase {
    updateExperimentRequest: shared.UpdateExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateExperimentXAmzTargetEnum;
}
export declare class UpdateExperimentResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateExperimentResponse?: shared.UpdateExperimentResponse;
}
