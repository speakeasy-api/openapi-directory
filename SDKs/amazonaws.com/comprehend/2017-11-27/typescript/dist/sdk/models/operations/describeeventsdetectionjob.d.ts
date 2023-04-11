import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEventsDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeEventsDetectionJob = "Comprehend_20171127.DescribeEventsDetectionJob"
}
export declare class DescribeEventsDetectionJobRequest extends SpeakeasyBase {
    describeEventsDetectionJobRequest: shared.DescribeEventsDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEventsDetectionJobXAmzTargetEnum;
}
export declare class DescribeEventsDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEventsDetectionJobResponse?: shared.DescribeEventsDetectionJobResponse;
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
