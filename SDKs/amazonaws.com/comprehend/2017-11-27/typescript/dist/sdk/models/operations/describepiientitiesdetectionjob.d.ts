import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribePiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribePiiEntitiesDetectionJob = "Comprehend_20171127.DescribePiiEntitiesDetectionJob"
}
export declare class DescribePiiEntitiesDetectionJobRequest extends SpeakeasyBase {
    describePiiEntitiesDetectionJobRequest: shared.DescribePiiEntitiesDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribePiiEntitiesDetectionJobXAmzTargetEnum;
}
export declare class DescribePiiEntitiesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describePiiEntitiesDetectionJobResponse?: shared.DescribePiiEntitiesDetectionJobResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * JobNotFoundException
     */
    jobNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
