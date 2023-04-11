import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PostCommentReplyXAmzTargetEnum {
    CodeCommit20150413PostCommentReply = "CodeCommit_20150413.PostCommentReply"
}
export declare class PostCommentReplyRequest extends SpeakeasyBase {
    postCommentReplyInput: shared.PostCommentReplyInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PostCommentReplyXAmzTargetEnum;
}
export declare class PostCommentReplyResponse extends SpeakeasyBase {
    /**
     * ClientRequestTokenRequiredException
     */
    clientRequestTokenRequiredException?: any;
    /**
     * CommentContentRequiredException
     */
    commentContentRequiredException?: any;
    /**
     * CommentContentSizeLimitExceededException
     */
    commentContentSizeLimitExceededException?: any;
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
     * IdempotencyParameterMismatchException
     */
    idempotencyParameterMismatchException?: any;
    /**
     * InvalidClientRequestTokenException
     */
    invalidClientRequestTokenException?: any;
    /**
     * InvalidCommentIdException
     */
    invalidCommentIdException?: any;
    /**
     * Success
     */
    postCommentReplyOutput?: shared.PostCommentReplyOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
