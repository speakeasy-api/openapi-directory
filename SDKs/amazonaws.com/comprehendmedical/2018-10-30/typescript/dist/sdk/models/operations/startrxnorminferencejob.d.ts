import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartRxNormInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StartRxNormInferenceJob = "ComprehendMedical_20181030.StartRxNormInferenceJob"
}
export declare class StartRxNormInferenceJobRequest extends SpeakeasyBase {
    startRxNormInferenceJobRequest: shared.StartRxNormInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartRxNormInferenceJobXAmzTargetEnum;
}
export declare class StartRxNormInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startRxNormInferenceJobResponse?: shared.StartRxNormInferenceJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
