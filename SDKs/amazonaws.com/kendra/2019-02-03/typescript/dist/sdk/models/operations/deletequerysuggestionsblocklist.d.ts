import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteQuerySuggestionsBlockListXAmzTargetEnum {
    AWSKendraFrontendServiceDeleteQuerySuggestionsBlockList = "AWSKendraFrontendService.DeleteQuerySuggestionsBlockList"
}
export declare class DeleteQuerySuggestionsBlockListRequest extends SpeakeasyBase {
    deleteQuerySuggestionsBlockListRequest: shared.DeleteQuerySuggestionsBlockListRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteQuerySuggestionsBlockListXAmzTargetEnum;
}
export declare class DeleteQuerySuggestionsBlockListResponse extends SpeakeasyBase {
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
