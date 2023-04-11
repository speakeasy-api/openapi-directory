import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StopEntitiesDetectionJob = "Comprehend_20171127.StopEntitiesDetectionJob"
}
export declare class StopEntitiesDetectionJobRequest extends SpeakeasyBase {
    stopEntitiesDetectionJobRequest: shared.StopEntitiesDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopEntitiesDetectionJobXAmzTargetEnum;
}
export declare class StopEntitiesDetectionJobResponse extends SpeakeasyBase {
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
     * JobNotFoundException
     */
    jobNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopEntitiesDetectionJobResponse?: shared.StopEntitiesDetectionJobResponse;
}
