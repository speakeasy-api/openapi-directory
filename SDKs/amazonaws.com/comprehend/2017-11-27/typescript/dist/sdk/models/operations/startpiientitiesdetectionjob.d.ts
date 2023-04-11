import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartPiiEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127StartPiiEntitiesDetectionJob = "Comprehend_20171127.StartPiiEntitiesDetectionJob"
}
export declare class StartPiiEntitiesDetectionJobRequest extends SpeakeasyBase {
    startPiiEntitiesDetectionJobRequest: shared.StartPiiEntitiesDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartPiiEntitiesDetectionJobXAmzTargetEnum;
}
export declare class StartPiiEntitiesDetectionJobResponse extends SpeakeasyBase {
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
     * KmsKeyValidationException
     */
    kmsKeyValidationException?: any;
    /**
     * Success
     */
    startPiiEntitiesDetectionJobResponse?: shared.StartPiiEntitiesDetectionJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
