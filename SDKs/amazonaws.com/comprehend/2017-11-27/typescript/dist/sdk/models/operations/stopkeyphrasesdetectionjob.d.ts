import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopKeyPhrasesDetectionJobXAmzTargetEnum {
    Comprehend20171127StopKeyPhrasesDetectionJob = "Comprehend_20171127.StopKeyPhrasesDetectionJob"
}
export declare class StopKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
    stopKeyPhrasesDetectionJobRequest: shared.StopKeyPhrasesDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopKeyPhrasesDetectionJobXAmzTargetEnum;
}
export declare class StopKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
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
    stopKeyPhrasesDetectionJobResponse?: shared.StopKeyPhrasesDetectionJobResponse;
}
