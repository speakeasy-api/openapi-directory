import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateCommentXAmzTargetEnum {
    CodeCommit20150413UpdateComment = "CodeCommit_20150413.UpdateComment"
}
export declare class UpdateCommentRequest extends SpeakeasyBase {
    updateCommentInput: shared.UpdateCommentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateCommentXAmzTargetEnum;
}
export declare class UpdateCommentResponse extends SpeakeasyBase {
    /**
     * CommentContentRequiredException
     */
    commentContentRequiredException?: any;
    /**
     * CommentContentSizeLimitExceededException
     */
    commentContentSizeLimitExceededException?: any;
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
    /**
     * CommentNotCreatedByCallerException
     */
    commentNotCreatedByCallerException?: any;
    contentType: string;
    /**
     * InvalidCommentIdException
     */
    invalidCommentIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateCommentOutput?: shared.UpdateCommentOutput;
}
