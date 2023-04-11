import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeKeyPhrasesDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeKeyPhrasesDetectionJob = "Comprehend_20171127.DescribeKeyPhrasesDetectionJob"
}
export declare class DescribeKeyPhrasesDetectionJobRequest extends SpeakeasyBase {
    describeKeyPhrasesDetectionJobRequest: shared.DescribeKeyPhrasesDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeKeyPhrasesDetectionJobXAmzTargetEnum;
}
export declare class DescribeKeyPhrasesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeKeyPhrasesDetectionJobResponse?: shared.DescribeKeyPhrasesDetectionJobResponse;
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
