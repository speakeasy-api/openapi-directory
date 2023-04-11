import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopIcd10CMInferenceJobXAmzTargetEnum {
    ComprehendMedical20181030StopIcd10CMInferenceJob = "ComprehendMedical_20181030.StopICD10CMInferenceJob"
}
export declare class StopIcd10CMInferenceJobRequest extends SpeakeasyBase {
    stopIcd10CMInferenceJobRequest: shared.StopIcd10CMInferenceJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopIcd10CMInferenceJobXAmzTargetEnum;
}
export declare class StopIcd10CMInferenceJobResponse extends SpeakeasyBase {
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
    stopIcd10CMInferenceJobResponse?: shared.StopIcd10CMInferenceJobResponse;
}
