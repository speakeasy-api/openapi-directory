import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutCommentReactionXAmzTargetEnum {
    CodeCommit20150413PutCommentReaction = "CodeCommit_20150413.PutCommentReaction"
}
export declare class PutCommentReactionRequest extends SpeakeasyBase {
    putCommentReactionInput: shared.PutCommentReactionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutCommentReactionXAmzTargetEnum;
}
export declare class PutCommentReactionResponse extends SpeakeasyBase {
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
     * InvalidCommentIdException
     */
    invalidCommentIdException?: any;
    /**
     * InvalidReactionValueException
     */
    invalidReactionValueException?: any;
    /**
     * ReactionLimitExceededException
     */
    reactionLimitExceededException?: any;
    /**
     * ReactionValueRequiredException
     */
    reactionValueRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
