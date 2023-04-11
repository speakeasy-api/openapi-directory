import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListIcd10CMInferenceJobsXAmzTargetEnum {
    ComprehendMedical20181030ListIcd10CMInferenceJobs = "ComprehendMedical_20181030.ListICD10CMInferenceJobs"
}
export declare class ListIcd10CMInferenceJobsRequest extends SpeakeasyBase {
    listIcd10CMInferenceJobsRequest: shared.ListIcd10CMInferenceJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListIcd10CMInferenceJobsXAmzTargetEnum;
}
export declare class ListIcd10CMInferenceJobsResponse extends SpeakeasyBase {
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
     * Success
     */
    listIcd10CMInferenceJobsResponse?: shared.ListIcd10CMInferenceJobsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
