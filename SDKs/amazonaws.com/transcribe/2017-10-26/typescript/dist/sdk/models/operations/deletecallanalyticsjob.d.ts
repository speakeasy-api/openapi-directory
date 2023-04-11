import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCallAnalyticsJobXAmzTargetEnum {
    TranscribeDeleteCallAnalyticsJob = "Transcribe.DeleteCallAnalyticsJob"
}
export declare class DeleteCallAnalyticsJobRequest extends SpeakeasyBase {
    deleteCallAnalyticsJobRequest: shared.DeleteCallAnalyticsJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCallAnalyticsJobXAmzTargetEnum;
}
export declare class DeleteCallAnalyticsJobResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteCallAnalyticsJobResponse?: Record<string, any>;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
