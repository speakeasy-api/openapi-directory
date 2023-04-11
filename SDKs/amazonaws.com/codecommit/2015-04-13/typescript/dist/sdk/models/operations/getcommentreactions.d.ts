import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCommentReactionsXAmzTargetEnum {
    CodeCommit20150413GetCommentReactions = "CodeCommit_20150413.GetCommentReactions"
}
export declare class GetCommentReactionsRequest extends SpeakeasyBase {
    getCommentReactionsInput: shared.GetCommentReactionsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommentReactionsXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetCommentReactionsResponse extends SpeakeasyBase {
    /**
     * CommentDeletedException
     */
    commentDeletedException?: any;
    /**
     * CommentDoesNotExistException
     */
    commentDoesNotExistException?: any;
    /**
     * CommentIdRequiredException
     */
    commentIdRequiredException?: any;
    contentType: string;
    /**
     * Success
     */
    getCommentReactionsOutput?: shared.GetCommentReactionsOutput;
    /**
     * InvalidCommentIdException
     */
    invalidCommentIdException?: any;
    /**
     * InvalidContinuationTokenException
     */
    invalidContinuationTokenException?: any;
    /**
     * InvalidMaxResultsException
     */
    invalidMaxResultsException?: any;
    /**
     * InvalidReactionUserArnException
     */
    invalidReactionUserArnException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
