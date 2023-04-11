import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartCallAnalyticsJobXAmzTargetEnum {
    TranscribeStartCallAnalyticsJob = "Transcribe.StartCallAnalyticsJob"
}
export declare class StartCallAnalyticsJobRequest extends SpeakeasyBase {
    startCallAnalyticsJobRequest: shared.StartCallAnalyticsJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartCallAnalyticsJobXAmzTargetEnum;
}
export declare class StartCallAnalyticsJobResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    startCallAnalyticsJobResponse?: shared.StartCallAnalyticsJobResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
