import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ScheduleRunXAmzTargetEnum {
    DeviceFarm20150623ScheduleRun = "DeviceFarm_20150623.ScheduleRun"
}
export declare class ScheduleRunRequest extends SpeakeasyBase {
    scheduleRunRequest: shared.ScheduleRunRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ScheduleRunXAmzTargetEnum;
}
export declare class ScheduleRunResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * IdempotencyException
     */
    idempotencyException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    scheduleRunResult?: shared.ScheduleRunResult;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
