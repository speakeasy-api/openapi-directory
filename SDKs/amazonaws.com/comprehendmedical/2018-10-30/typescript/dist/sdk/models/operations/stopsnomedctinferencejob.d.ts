import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopSNOMEDCTInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StopSNOMEDCTInferenceJob = "ComprehendMedical_20181030.StopSNOMEDCTInferenceJob"
}
export declare class StopSNOMEDCTInferenceJobRequest extends SpeakeasyBase {
    stopSNOMEDCTInferenceJobRequest: shared.StopSNOMEDCTInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopSNOMEDCTInferenceJobXAmzTargetEnum;
}
export declare class StopSNOMEDCTInferenceJobResponse extends SpeakeasyBase {
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
    stopSNOMEDCTInferenceJobResponse?: shared.StopSNOMEDCTInferenceJobResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
