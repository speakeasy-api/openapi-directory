import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartIcd10CMInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StartIcd10CMInferenceJob = "ComprehendMedical_20181030.StartICD10CMInferenceJob"
}
export declare class StartIcd10CMInferenceJobRequest extends SpeakeasyBase {
    startIcd10CMInferenceJobRequest: shared.StartIcd10CMInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartIcd10CMInferenceJobXAmzTargetEnum;
}
export declare class StartIcd10CMInferenceJobResponse extends SpeakeasyBase {
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
    startIcd10CMInferenceJobResponse?: shared.StartIcd10CMInferenceJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
