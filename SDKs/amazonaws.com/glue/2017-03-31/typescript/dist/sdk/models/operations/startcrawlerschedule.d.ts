import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartCrawlerScheduleXAmzTargetEnum {
    AWSGlueStartCrawlerSchedule = "AWSGlue.StartCrawlerSchedule"
}
export declare class StartCrawlerScheduleRequest extends SpeakeasyBase {
    startCrawlerScheduleRequest: shared.StartCrawlerScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartCrawlerScheduleXAmzTargetEnum;
}
export declare class StartCrawlerScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * NoScheduleException
     */
    noScheduleException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * SchedulerRunningException
     */
    schedulerRunningException?: any;
    /**
     * SchedulerTransitioningException
     */
    schedulerTransitioningException?: any;
    /**
     * Success
     */
    startCrawlerScheduleResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
