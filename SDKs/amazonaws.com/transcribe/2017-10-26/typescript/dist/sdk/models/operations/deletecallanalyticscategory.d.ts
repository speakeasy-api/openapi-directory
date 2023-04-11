import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeDeleteCallAnalyticsCategory = "Transcribe.DeleteCallAnalyticsCategory"
}
export declare class DeleteCallAnalyticsCategoryRequest extends SpeakeasyBase {
    deleteCallAnalyticsCategoryRequest: shared.DeleteCallAnalyticsCategoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCallAnalyticsCategoryXAmzTargetEnum;
}
export declare class DeleteCallAnalyticsCategoryResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteCallAnalyticsCategoryResponse?: Record<string, any>;
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
