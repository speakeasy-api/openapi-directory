import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeCreateCallAnalyticsCategory = "Transcribe.CreateCallAnalyticsCategory"
}
export declare class CreateCallAnalyticsCategoryRequest extends SpeakeasyBase {
    createCallAnalyticsCategoryRequest: shared.CreateCallAnalyticsCategoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCallAnalyticsCategoryXAmzTargetEnum;
}
export declare class CreateCallAnalyticsCategoryResponse extends SpeakeasyBase {
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
     * Success
     */
    createCallAnalyticsCategoryResponse?: shared.CreateCallAnalyticsCategoryResponse;
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
