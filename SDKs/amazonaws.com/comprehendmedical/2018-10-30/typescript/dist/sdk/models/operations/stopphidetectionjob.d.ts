import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopPHIDetectionJobXAmzTargetEnum {
    ComprehendMedical20181030StopPHIDetectionJob = "ComprehendMedical_20181030.StopPHIDetectionJob"
}
export declare class StopPHIDetectionJobRequest extends SpeakeasyBase {
    stopPHIDetectionJobRequest: shared.StopPHIDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopPHIDetectionJobXAmzTargetEnum;
}
export declare class StopPHIDetectionJobResponse extends SpeakeasyBase {
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
    stopPHIDetectionJobResponse?: shared.StopPHIDetectionJobResponse;
}
