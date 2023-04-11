import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of code reviews to list in the response.
 */
export declare enum ListCodeReviewsTypeEnum {
    PullRequest = "PullRequest",
    RepositoryAnalysis = "RepositoryAnalysis"
}
export declare class ListCodeReviewsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results that are returned per call. The default is 100.
     */
    maxResults?: number;
    /**
     * If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged.
     */
    nextToken?: string;
    /**
     * List of provider types for filtering that needs to be applied before displaying the result. For example, <code>providerTypes=[GitHub]</code> lists code reviews from GitHub.
     */
    providerTypes?: shared.ProviderTypeEnum[];
    /**
     * List of repository names for filtering that needs to be applied before displaying the result.
     */
    repositoryNames?: string[];
    /**
     * <p>List of states for filtering that needs to be applied before displaying the result. For example, <code>states=[Pending]</code> lists code reviews in the Pending state.</p> <p>The valid code review states are:</p> <ul> <li> <p> <code>Completed</code>: The code review is complete.</p> </li> <li> <p> <code>Pending</code>: The code review started and has not completed or failed.</p> </li> <li> <p> <code>Failed</code>: The code review failed.</p> </li> <li> <p> <code>Deleting</code>: The code review is being deleted.</p> </li> </ul>
     */
    states?: shared.JobStateEnum[];
    /**
     * The type of code reviews to list in the response.
     */
    type: ListCodeReviewsTypeEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListCodeReviewsResponse extends SpeakeasyBase {
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
    listCodeReviewsResponse?: shared.ListCodeReviewsResponse;
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
