import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopPiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StopPiiEntitiesDetectionJob = "Comprehend_20171127.StopPiiEntitiesDetectionJob"
}
export declare class StopPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
    stopPiiEntitiesDetectionJobRequest: shared.StopPiiEntitiesDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopPiiEntitiesDetectionJobXAmzTargetEnum;
}
export declare class StopPiiEntitiesDetectionJobResponse extends SpeakeasyBase {
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
    stopPiiEntitiesDetectionJobResponse?: shared.StopPiiEntitiesDetectionJobResponse;
}
