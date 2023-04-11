import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTargetedSentimentDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeTargetedSentimentDetectionJob = "Comprehend_20171127.DescribeTargetedSentimentDetectionJob"
}
export declare class DescribeTargetedSentimentDetectionJobRequest extends SpeakeasyBase {
    describeTargetedSentimentDetectionJobRequest: shared.DescribeTargetedSentimentDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTargetedSentimentDetectionJobXAmzTargetEnum;
}
export declare class DescribeTargetedSentimentDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTargetedSentimentDetectionJobResponse?: shared.DescribeTargetedSentimentDetectionJobResponse;
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
