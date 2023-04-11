import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutBandwidthRateLimitScheduleXAmzTargetEnum {
    BackupOnPremisesV20210101PutBandwidthRateLimitSchedule = "BackupOnPremises_v20210101.PutBandwidthRateLimitSchedule"
}
export declare class PutBandwidthRateLimitScheduleRequest extends SpeakeasyBase {
    putBandwidthRateLimitScheduleInput: shared.PutBandwidthRateLimitScheduleInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutBandwidthRateLimitScheduleXAmzTargetEnum;
}
export declare class PutBandwidthRateLimitScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putBandwidthRateLimitScheduleOutput?: shared.PutBandwidthRateLimitScheduleOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
