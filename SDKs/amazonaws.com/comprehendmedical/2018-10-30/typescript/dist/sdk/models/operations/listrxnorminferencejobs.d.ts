import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListRxNormInferenceJobsXAmzTargetEnum {
    ComprehendMedical20181030ListRxNormInferenceJobs = "ComprehendMedical_20181030.ListRxNormInferenceJobs"
}
export declare class ListRxNormInferenceJobsRequest extends SpeakeasyBase {
    listRxNormInferenceJobsRequest: shared.ListRxNormInferenceJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRxNormInferenceJobsXAmzTargetEnum;
}
export declare class ListRxNormInferenceJobsResponse extends SpeakeasyBase {
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
    listRxNormInferenceJobsResponse?: shared.ListRxNormInferenceJobsResponse;
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
