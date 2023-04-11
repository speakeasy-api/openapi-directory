import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetBandwidthRateLimitScheduleXAmzTargetEnum {
    BackupOnPremisesV20210101GetBandwidthRateLimitSchedule = "BackupOnPremises_v20210101.GetBandwidthRateLimitSchedule"
}
export declare class GetBandwidthRateLimitScheduleRequest extends SpeakeasyBase {
    getBandwidthRateLimitScheduleInput: shared.GetBandwidthRateLimitScheduleInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetBandwidthRateLimitScheduleXAmzTargetEnum;
}
export declare class GetBandwidthRateLimitScheduleResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getBandwidthRateLimitScheduleOutput?: shared.GetBandwidthRateLimitScheduleOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
