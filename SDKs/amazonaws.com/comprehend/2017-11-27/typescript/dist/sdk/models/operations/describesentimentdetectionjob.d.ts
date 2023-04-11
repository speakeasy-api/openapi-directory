import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeSentimentDetectionJob = "Comprehend_20171127.DescribeSentimentDetectionJob"
}
export declare class DescribeSentimentDetectionJobRequest extends SpeakeasyBase {
    describeSentimentDetectionJobRequest: shared.DescribeSentimentDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSentimentDetectionJobXAmzTargetEnum;
}
export declare class DescribeSentimentDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeSentimentDetectionJobResponse?: shared.DescribeSentimentDetectionJobResponse;
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
