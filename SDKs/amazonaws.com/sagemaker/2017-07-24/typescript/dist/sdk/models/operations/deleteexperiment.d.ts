import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteExperimentXAmzTargetEnum {
    SageMakerDeleteExperiment = "SageMaker.DeleteExperiment"
}
export declare class DeleteExperimentRequest extends SpeakeasyBase {
    deleteExperimentRequest: shared.DeleteExperimentRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteExperimentXAmzTargetEnum;
}
export declare class DeleteExperimentResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteExperimentResponse?: shared.DeleteExperimentResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
