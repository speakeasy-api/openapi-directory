import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeEntitiesDetectionJobXAmzTargetEnum {
    Comprehend20171127DescribeEntitiesDetectionJob = "Comprehend_20171127.DescribeEntitiesDetectionJob"
}
export declare class DescribeEntitiesDetectionJobRequest extends SpeakeasyBase {
    describeEntitiesDetectionJobRequest: shared.DescribeEntitiesDetectionJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeEntitiesDetectionJobXAmzTargetEnum;
}
export declare class DescribeEntitiesDetectionJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeEntitiesDetectionJobResponse?: shared.DescribeEntitiesDetectionJobResponse;
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
