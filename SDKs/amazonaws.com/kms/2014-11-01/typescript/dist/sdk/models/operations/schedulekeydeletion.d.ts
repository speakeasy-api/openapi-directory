import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ScheduleKeyDeletionXAmzTargetEnum {
    TrentServiceScheduleKeyDeletion = "TrentService.ScheduleKeyDeletion"
}
export declare class ScheduleKeyDeletionRequest extends SpeakeasyBase {
    scheduleKeyDeletionRequest: shared.ScheduleKeyDeletionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ScheduleKeyDeletionXAmzTargetEnum;
}
export declare class ScheduleKeyDeletionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DependencyTimeoutException
     */
    dependencyTimeoutException?: any;
    /**
     * InvalidArnException
     */
    invalidArnException?: any;
    /**
     * KMSInternalException
     */
    kmsInternalException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    scheduleKeyDeletionResponse?: shared.ScheduleKeyDeletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
