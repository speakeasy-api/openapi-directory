import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCommentXAmzTargetEnum {
    CodeCommit20150413GetComment = "CodeCommit_20150413.GetComment"
}
export declare class GetCommentRequest extends SpeakeasyBase {
    getCommentInput: shared.GetCommentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommentXAmzTargetEnum;
}
export declare class GetCommentResponse extends SpeakeasyBase {
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
     * EncryptionIntegrityChecksFailedException
     */
    encryptionIntegrityChecksFailedException?: any;
    /**
     * EncryptionKeyAccessDeniedException
     */
    encryptionKeyAccessDeniedException?: any;
    /**
     * EncryptionKeyDisabledException
     */
    encryptionKeyDisabledException?: any;
    /**
     * EncryptionKeyNotFoundException
     */
    encryptionKeyNotFoundException?: any;
    /**
     * EncryptionKeyUnavailableException
     */
    encryptionKeyUnavailableException?: any;
    /**
     * Success
     */
    getCommentOutput?: shared.GetCommentOutput;
    /**
     * InvalidCommentIdException
     */
    invalidCommentIdException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
