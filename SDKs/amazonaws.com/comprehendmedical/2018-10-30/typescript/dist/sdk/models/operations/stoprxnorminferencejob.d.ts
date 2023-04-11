import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopRxNormInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StopRxNormInferenceJob = "ComprehendMedical_20181030.StopRxNormInferenceJob"
}
export declare class StopRxNormInferenceJobRequest extends SpeakeasyBase {
    stopRxNormInferenceJobRequest: shared.StopRxNormInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopRxNormInferenceJobXAmzTargetEnum;
}
export declare class StopRxNormInferenceJobResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopRxNormInferenceJobResponse?: shared.StopRxNormInferenceJobResponse;
}
