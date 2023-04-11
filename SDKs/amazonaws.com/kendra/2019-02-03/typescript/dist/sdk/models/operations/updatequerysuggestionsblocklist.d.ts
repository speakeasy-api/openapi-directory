import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateQuerySuggestionsBlockListXAmzTargetEnum {
    AWSKendraFrontendServiceUpdateQuerySuggestionsBlockList = "AWSKendraFrontendService.UpdateQuerySuggestionsBlockList"
}
export declare class UpdateQuerySuggestionsBlockListRequest extends SpeakeasyBase {
    updateQuerySuggestionsBlockListRequest: shared.UpdateQuerySuggestionsBlockListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateQuerySuggestionsBlockListXAmzTargetEnum;
}
export declare class UpdateQuerySuggestionsBlockListResponse extends SpeakeasyBase {
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
