import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTopicsDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeTopicsDetectionJob = "Comprehend_20171127.DescribeTopicsDetectionJob"
}
export declare class DescribeTopicsDetectionJobRequest extends SpeakeasyBase {
    describeTopicsDetectionJobRequest: shared.DescribeTopicsDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTopicsDetectionJobXAmzTargetEnum;
}
export declare class DescribeTopicsDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTopicsDetectionJobResponse?: shared.DescribeTopicsDetectionJobResponse;
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
