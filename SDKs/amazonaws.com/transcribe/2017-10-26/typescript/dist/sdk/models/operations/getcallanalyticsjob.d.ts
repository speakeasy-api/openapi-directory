import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCallAnalyticsJobXAmzTargetEnum {
    TranscribeGetCallAnalyticsJob = "Transcribe.GetCallAnalyticsJob"
}
export declare class GetCallAnalyticsJobRequest extends SpeakeasyBase {
    getCallAnalyticsJobRequest: shared.GetCallAnalyticsJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCallAnalyticsJobXAmzTargetEnum;
}
export declare class GetCallAnalyticsJobResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getCallAnalyticsJobResponse?: shared.GetCallAnalyticsJobResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
