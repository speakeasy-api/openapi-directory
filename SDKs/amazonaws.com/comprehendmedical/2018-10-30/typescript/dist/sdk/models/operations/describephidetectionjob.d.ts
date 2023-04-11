import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePHIDetectionJobXAmzTargetEnum {
    ComprehendMedical20181030DescribePHIDetectionJob = "ComprehendMedical_20181030.DescribePHIDetectionJob"
}
export declare class DescribePHIDetectionJobRequest extends SpeakeasyBase {
    describePHIDetectionJobRequest: shared.DescribePHIDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePHIDetectionJobXAmzTargetEnum;
}
export declare class DescribePHIDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePHIDetectionJobResponse?: shared.DescribePHIDetectionJobResponse;
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
