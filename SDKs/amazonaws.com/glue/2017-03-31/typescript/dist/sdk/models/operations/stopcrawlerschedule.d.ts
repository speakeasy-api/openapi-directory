import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopCrawlerScheduleXAmzTargetEnum {
    AWSGlueStopCrawlerSchedule = "AWSGlue.StopCrawlerSchedule"
}
export declare class StopCrawlerScheduleRequest extends SpeakeasyBase {
    stopCrawlerScheduleRequest: shared.StopCrawlerScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopCrawlerScheduleXAmzTargetEnum;
}
export declare class StopCrawlerScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * SchedulerNotRunningException
     */
    schedulerNotRunningException?: any;
    /**
     * SchedulerTransitioningException
     */
    schedulerTransitioningException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    stopCrawlerScheduleResponse?: Record<string, any>;
}
