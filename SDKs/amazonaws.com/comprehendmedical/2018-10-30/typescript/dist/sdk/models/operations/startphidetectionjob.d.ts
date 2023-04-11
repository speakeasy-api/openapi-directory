import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartPHIDetectionJobXAmzTargetEnum {
    ComprehendMedical20181030StartPHIDetectionJob = "ComprehendMedical_20181030.StartPHIDetectionJob"
}
export declare class StartPHIDetectionJobRequest extends SpeakeasyBase {
    startPHIDetectionJobRequest: shared.StartPHIDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPHIDetectionJobXAmzTargetEnum;
}
export declare class StartPHIDetectionJobResponse extends SpeakeasyBase {
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
    startPHIDetectionJobResponse?: shared.StartPHIDetectionJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
