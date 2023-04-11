import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCallAnalyticsCategoryXAmzTargetEnum {
    TranscribeUpdateCallAnalyticsCategory = "Transcribe.UpdateCallAnalyticsCategory"
}
export declare class UpdateCallAnalyticsCategoryRequest extends SpeakeasyBase {
    updateCallAnalyticsCategoryRequest: shared.UpdateCallAnalyticsCategoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCallAnalyticsCategoryXAmzTargetEnum;
}
export declare class UpdateCallAnalyticsCategoryResponse extends SpeakeasyBase {
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
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCallAnalyticsCategoryResponse?: shared.UpdateCallAnalyticsCategoryResponse;
}
