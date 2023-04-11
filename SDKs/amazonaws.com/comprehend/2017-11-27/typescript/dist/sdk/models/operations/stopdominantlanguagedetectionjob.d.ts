import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopDominantLanguageDetectionJobXAmzTargetEnum {
    Comprehend20171127StopDominantLanguageDetectionJob = "Comprehend_20171127.StopDominantLanguageDetectionJob"
}
export declare class StopDominantLanguageDetectionJobRequest extends SpeakeasyBase {
    stopDominantLanguageDetectionJobRequest: shared.StopDominantLanguageDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDominantLanguageDetectionJobXAmzTargetEnum;
}
export declare class StopDominantLanguageDetectionJobResponse extends SpeakeasyBase {
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
    stopDominantLanguageDetectionJobResponse?: shared.StopDominantLanguageDetectionJobResponse;
}
