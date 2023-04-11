import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListQuerySuggestionsBlockListsXAmzTargetEnum {
    AWSKendraFrontendServiceListQuerySuggestionsBlockLists = "AWSKendraFrontendService.ListQuerySuggestionsBlockLists"
}
export declare class ListQuerySuggestionsBlockListsRequest extends SpeakeasyBase {
    listQuerySuggestionsBlockListsRequest: shared.ListQuerySuggestionsBlockListsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListQuerySuggestionsBlockListsXAmzTargetEnum;
}
export declare class ListQuerySuggestionsBlockListsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listQuerySuggestionsBlockListsResponse?: shared.ListQuerySuggestionsBlockListsResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
