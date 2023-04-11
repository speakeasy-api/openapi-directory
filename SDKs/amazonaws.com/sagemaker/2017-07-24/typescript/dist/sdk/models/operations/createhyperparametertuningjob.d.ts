import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHyperParameterTuningJobXAmzTargetEnum {
    SageMakerCreateHyperParameterTuningJob = "SageMaker.CreateHyperParameterTuningJob"
}
export declare class CreateHyperParameterTuningJobRequest extends SpeakeasyBase {
    createHyperParameterTuningJobRequest: shared.CreateHyperParameterTuningJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHyperParameterTuningJobXAmzTargetEnum;
}
export declare class CreateHyperParameterTuningJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createHyperParameterTuningJobResponse?: shared.CreateHyperParameterTuningJobResponse;
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
