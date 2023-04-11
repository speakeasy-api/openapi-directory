import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ClearQuerySuggestionsXAmzTargetEnum {
    AWSKendraFrontendServiceClearQuerySuggestions = "AWSKendraFrontendService.ClearQuerySuggestions"
}
export declare class ClearQuerySuggestionsRequest extends SpeakeasyBase {
    clearQuerySuggestionsRequest: shared.ClearQuerySuggestionsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ClearQuerySuggestionsXAmzTargetEnum;
}
export declare class ClearQuerySuggestionsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
