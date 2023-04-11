import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PostCommentForComparedCommitXAmzTargetEnum {
    CodeCommit20150413PostCommentForComparedCommit = "CodeCommit_20150413.PostCommentForComparedCommit"
}
export declare class PostCommentForComparedCommitRequest extends SpeakeasyBase {
    postCommentForComparedCommitInput: shared.PostCommentForComparedCommitInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PostCommentForComparedCommitXAmzTargetEnum;
}
export declare class PostCommentForComparedCommitResponse extends SpeakeasyBase {
    /**
     * BeforeCommitIdAndAfterCommitIdAreSameException
     */
    beforeCommitIdAndAfterCommitIdAreSameException?: any;
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
     * CommitDoesNotExistException
     */
    commitDoesNotExistException?: any;
    /**
     * CommitIdRequiredException
     */
    commitIdRequiredException?: any;
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
     * IdempotencyParameterMismatchException
     */
    idempotencyParameterMismatchException?: any;
    /**
     * InvalidClientRequestTokenException
     */
    invalidClientRequestTokenException?: any;
    /**
     * InvalidCommitIdException
     */
    invalidCommitIdException?: any;
    /**
     * InvalidFileLocationException
     */
    invalidFileLocationException?: any;
    /**
     * InvalidFilePositionException
     */
    invalidFilePositionException?: any;
    /**
     * InvalidPathException
     */
    invalidPathException?: any;
    /**
     * InvalidRelativeFileVersionEnumException
     */
    invalidRelativeFileVersionEnumException?: any;
    /**
     * InvalidRepositoryNameException
     */
    invalidRepositoryNameException?: any;
    /**
     * PathDoesNotExistException
     */
    pathDoesNotExistException?: any;
    /**
     * PathRequiredException
     */
    pathRequiredException?: any;
    /**
     * Success
     */
    postCommentForComparedCommitOutput?: shared.PostCommentForComparedCommitOutput;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
