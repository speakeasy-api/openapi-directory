import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateQuerySuggestionsBlockListXAmzTargetEnum {
    AWSKendraFrontendServiceCreateQuerySuggestionsBlockList = "AWSKendraFrontendService.CreateQuerySuggestionsBlockList"
}
export declare class CreateQuerySuggestionsBlockListRequest extends SpeakeasyBase {
    createQuerySuggestionsBlockListRequest: shared.CreateQuerySuggestionsBlockListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateQuerySuggestionsBlockListXAmzTargetEnum;
}
export declare class CreateQuerySuggestionsBlockListResponse extends SpeakeasyBase {
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
     * Success
     */
    createQuerySuggestionsBlockListResponse?: shared.CreateQuerySuggestionsBlockListResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
