import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A filter for cases. Only one value can be provided.
 */
export declare class SearchCasesRequestBodyFilter extends SpeakeasyBase {
    andAll?: shared.CaseFilter[];
    field?: shared.FieldFilter;
    /**
     * A filter for cases. Only one value can be provided.
     */
    not?: shared.CaseFilter;
}
export declare class SearchCasesRequestBody extends SpeakeasyBase {
    /**
     * The list of field identifiers to be returned as part of the response.
     */
    fields?: shared.FieldIdentifier[];
    /**
     * A filter for cases. Only one value can be provided.
     */
    filter?: SearchCasesRequestBodyFilter;
    /**
     * The maximum number of cases to return. The current maximum supported value is 25. This is also the default value when no other value is provided.
     */
    maxResults?: number;
    /**
     * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * A word or phrase used to perform a quick search.
     */
    searchTerm?: string;
    /**
     * A list of sorts where each sort specifies a field and their sort order to be applied to the results.
     */
    sorts?: shared.Sort[];
}
export declare class SearchCasesRequest extends SpeakeasyBase {
    requestBody: SearchCasesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique identifier of the Cases domain.
     */
    domainId: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class SearchCasesResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    searchCasesResponse?: shared.SearchCasesResponse;
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
