import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListAccessPreviewFindingsRequestBody extends SpeakeasyBase {
    /**
     * The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-getting-started.html#permission-resources">ARN of the analyzer</a> used to generate the access.
     */
    analyzerArn: string;
    /**
     * Criteria to filter the returned findings.
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
}
export declare class ListAccessPreviewFindingsRequest extends SpeakeasyBase {
    requestBody: ListAccessPreviewFindingsRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The unique ID for the access preview.
     */
    accessPreviewId: string;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class ListAccessPreviewFindingsResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    listAccessPreviewFindingsResponse?: shared.ListAccessPreviewFindingsResponse;
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
