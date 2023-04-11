import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PostCommentForPullRequestXAmzTargetEnum {
    CodeCommit20150413PostCommentForPullRequest = "CodeCommit_20150413.PostCommentForPullRequest"
}
export declare class PostCommentForPullRequestRequest extends SpeakeasyBase {
    postCommentForPullRequestInput: shared.PostCommentForPullRequestInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PostCommentForPullRequestXAmzTargetEnum;
}
export declare class PostCommentForPullRequestResponse extends SpeakeasyBase {
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
     * InvalidPullRequestIdException
     */
    invalidPullRequestIdException?: any;
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
    postCommentForPullRequestOutput?: shared.PostCommentForPullRequestOutput;
    /**
     * PullRequestDoesNotExistException
     */
    pullRequestDoesNotExistException?: any;
    /**
     * PullRequestIdRequiredException
     */
    pullRequestIdRequiredException?: any;
    /**
     * RepositoryDoesNotExistException
     */
    repositoryDoesNotExistException?: any;
    /**
     * RepositoryNameRequiredException
     */
    repositoryNameRequiredException?: any;
    /**
     * RepositoryNotAssociatedWithPullRequestException
     */
    repositoryNotAssociatedWithPullRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
