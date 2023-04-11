import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteCommentContentXAmzTargetEnum {
    CodeCommit20150413DeleteCommentContent = "CodeCommit_20150413.DeleteCommentContent"
}
export declare class DeleteCommentContentRequest extends SpeakeasyBase {
    deleteCommentContentInput: shared.DeleteCommentContentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteCommentContentXAmzTargetEnum;
}
export declare class DeleteCommentContentResponse extends SpeakeasyBase {
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
    deleteCommentContentOutput?: shared.DeleteCommentContentOutput;
    /**
     * InvalidCommentIdException
     */
    invalidCommentIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
