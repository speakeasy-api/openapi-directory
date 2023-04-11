import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCrawlerScheduleXAmzTargetEnum {
    AWSGlueUpdateCrawlerSchedule = "AWSGlue.UpdateCrawlerSchedule"
}
export declare class UpdateCrawlerScheduleRequest extends SpeakeasyBase {
    updateCrawlerScheduleRequest: shared.UpdateCrawlerScheduleRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCrawlerScheduleXAmzTargetEnum;
}
export declare class UpdateCrawlerScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * SchedulerTransitioningException
     */
    schedulerTransitioningException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCrawlerScheduleResponse?: Record<string, any>;
    /**
     * VersionMismatchException
     */
    versionMismatchException?: any;
}
