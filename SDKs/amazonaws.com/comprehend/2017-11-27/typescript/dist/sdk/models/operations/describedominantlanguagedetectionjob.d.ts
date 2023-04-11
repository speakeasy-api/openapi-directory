import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeDominantLanguageDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeDominantLanguageDetectionJob = "Comprehend_20171127.DescribeDominantLanguageDetectionJob"
}
export declare class DescribeDominantLanguageDetectionJobRequest extends SpeakeasyBase {
    describeDominantLanguageDetectionJobRequest: shared.DescribeDominantLanguageDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDominantLanguageDetectionJobXAmzTargetEnum;
}
export declare class DescribeDominantLanguageDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeDominantLanguageDetectionJobResponse?: shared.DescribeDominantLanguageDetectionJobResponse;
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
