import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeGetCallAnalyticsCategory = "Transcribe.GetCallAnalyticsCategory"
}
export declare class GetCallAnalyticsCategoryRequest extends SpeakeasyBase {
    getCallAnalyticsCategoryRequest: shared.GetCallAnalyticsCategoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCallAnalyticsCategoryXAmzTargetEnum;
}
export declare class GetCallAnalyticsCategoryResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    getCallAnalyticsCategoryResponse?: shared.GetCallAnalyticsCategoryResponse;
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
