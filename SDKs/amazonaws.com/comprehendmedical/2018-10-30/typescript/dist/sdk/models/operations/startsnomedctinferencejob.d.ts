import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartSNOMEDCTInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StartSNOMEDCTInferenceJob = "ComprehendMedical_20181030.StartSNOMEDCTInferenceJob"
}
export declare class StartSNOMEDCTInferenceJobRequest extends SpeakeasyBase {
    startSNOMEDCTInferenceJobRequest: shared.StartSNOMEDCTInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSNOMEDCTInferenceJobXAmzTargetEnum;
}
export declare class StartSNOMEDCTInferenceJobResponse extends SpeakeasyBase {
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
    startSNOMEDCTInferenceJobResponse?: shared.StartSNOMEDCTInferenceJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
