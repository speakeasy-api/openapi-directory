import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListPHIDetectionJobsXAmzTargetEnum {
    ComprehendMedical20181030ListPHIDetectionJobs = "ComprehendMedical_20181030.ListPHIDetectionJobs"
}
export declare class ListPHIDetectionJobsRequest extends SpeakeasyBase {
    listPHIDetectionJobsRequest: shared.ListPHIDetectionJobsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPHIDetectionJobsXAmzTargetEnum;
}
export declare class ListPHIDetectionJobsResponse extends SpeakeasyBase {
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
    listPHIDetectionJobsResponse?: shared.ListPHIDetectionJobsResponse;
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
