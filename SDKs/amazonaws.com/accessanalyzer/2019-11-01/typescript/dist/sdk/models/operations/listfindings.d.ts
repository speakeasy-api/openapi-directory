import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The criteria used to sort.
 */
export declare class ListFindingsRequestBodySort extends SpeakeasyBase {
    attributeName?: string;
    orderBy?: shared.OrderByEnum;
}
export declare class ListFindingsRequestBody extends SpeakeasyBase {
    /**
     * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> to retrieve findings from.
     */
    analyzerArn: string;
    /**
     * A filter to match for the findings to return.
     */
    filter?: Record<string, shared.Criterion>;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: string;
    /**
     * The criteria used to sort.
     */
    sort?: ListFindingsRequestBodySort;
}
export declare class ListFindingsRequest extends SpeakeasyBase {
    requestBody: ListFindingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListFindingsResponse extends SpeakeasyBase {
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
    listFindingsResponse?: shared.ListFindingsResponse;
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
