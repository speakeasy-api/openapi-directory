package openapisdk.models.operations;



public class PostCommentForComparedCommitResponse {
    public Object beforeCommitIdAndAfterCommitIdAreSameException;
    public PostCommentForComparedCommitResponse withBeforeCommitIdAndAfterCommitIdAreSameException(Object beforeCommitIdAndAfterCommitIdAreSameException) {
        this.beforeCommitIdAndAfterCommitIdAreSameException = beforeCommitIdAndAfterCommitIdAreSameException;
        return this;
    }
    public Object clientRequestTokenRequiredException;
    public PostCommentForComparedCommitResponse withClientRequestTokenRequiredException(Object clientRequestTokenRequiredException) {
        this.clientRequestTokenRequiredException = clientRequestTokenRequiredException;
        return this;
    }
    public Object commentContentRequiredException;
    public PostCommentForComparedCommitResponse withCommentContentRequiredException(Object commentContentRequiredException) {
        this.commentContentRequiredException = commentContentRequiredException;
        return this;
    }
    public Object commentContentSizeLimitExceededException;
    public PostCommentForComparedCommitResponse withCommentContentSizeLimitExceededException(Object commentContentSizeLimitExceededException) {
        this.commentContentSizeLimitExceededException = commentContentSizeLimitExceededException;
        return this;
    }
    public Object commitDoesNotExistException;
    public PostCommentForComparedCommitResponse withCommitDoesNotExistException(Object commitDoesNotExistException) {
        this.commitDoesNotExistException = commitDoesNotExistException;
        return this;
    }
    public Object commitIdRequiredException;
    public PostCommentForComparedCommitResponse withCommitIdRequiredException(Object commitIdRequiredException) {
        this.commitIdRequiredException = commitIdRequiredException;
        return this;
    }
    public String contentType;
    public PostCommentForComparedCommitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object encryptionIntegrityChecksFailedException;
    public PostCommentForComparedCommitResponse withEncryptionIntegrityChecksFailedException(Object encryptionIntegrityChecksFailedException) {
        this.encryptionIntegrityChecksFailedException = encryptionIntegrityChecksFailedException;
        return this;
    }
    public Object encryptionKeyAccessDeniedException;
    public PostCommentForComparedCommitResponse withEncryptionKeyAccessDeniedException(Object encryptionKeyAccessDeniedException) {
        this.encryptionKeyAccessDeniedException = encryptionKeyAccessDeniedException;
        return this;
    }
    public Object encryptionKeyDisabledException;
    public PostCommentForComparedCommitResponse withEncryptionKeyDisabledException(Object encryptionKeyDisabledException) {
        this.encryptionKeyDisabledException = encryptionKeyDisabledException;
        return this;
    }
    public Object encryptionKeyNotFoundException;
    public PostCommentForComparedCommitResponse withEncryptionKeyNotFoundException(Object encryptionKeyNotFoundException) {
        this.encryptionKeyNotFoundException = encryptionKeyNotFoundException;
        return this;
    }
    public Object encryptionKeyUnavailableException;
    public PostCommentForComparedCommitResponse withEncryptionKeyUnavailableException(Object encryptionKeyUnavailableException) {
        this.encryptionKeyUnavailableException = encryptionKeyUnavailableException;
        return this;
    }
    public Object idempotencyParameterMismatchException;
    public PostCommentForComparedCommitResponse withIdempotencyParameterMismatchException(Object idempotencyParameterMismatchException) {
        this.idempotencyParameterMismatchException = idempotencyParameterMismatchException;
        return this;
    }
    public Object invalidClientRequestTokenException;
    public PostCommentForComparedCommitResponse withInvalidClientRequestTokenException(Object invalidClientRequestTokenException) {
        this.invalidClientRequestTokenException = invalidClientRequestTokenException;
        return this;
    }
    public Object invalidCommitIdException;
    public PostCommentForComparedCommitResponse withInvalidCommitIdException(Object invalidCommitIdException) {
        this.invalidCommitIdException = invalidCommitIdException;
        return this;
    }
    public Object invalidFileLocationException;
    public PostCommentForComparedCommitResponse withInvalidFileLocationException(Object invalidFileLocationException) {
        this.invalidFileLocationException = invalidFileLocationException;
        return this;
    }
    public Object invalidFilePositionException;
    public PostCommentForComparedCommitResponse withInvalidFilePositionException(Object invalidFilePositionException) {
        this.invalidFilePositionException = invalidFilePositionException;
        return this;
    }
    public Object invalidPathException;
    public PostCommentForComparedCommitResponse withInvalidPathException(Object invalidPathException) {
        this.invalidPathException = invalidPathException;
        return this;
    }
    public Object invalidRelativeFileVersionEnumException;
    public PostCommentForComparedCommitResponse withInvalidRelativeFileVersionEnumException(Object invalidRelativeFileVersionEnumException) {
        this.invalidRelativeFileVersionEnumException = invalidRelativeFileVersionEnumException;
        return this;
    }
    public Object invalidRepositoryNameException;
    public PostCommentForComparedCommitResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object pathDoesNotExistException;
    public PostCommentForComparedCommitResponse withPathDoesNotExistException(Object pathDoesNotExistException) {
        this.pathDoesNotExistException = pathDoesNotExistException;
        return this;
    }
    public Object pathRequiredException;
    public PostCommentForComparedCommitResponse withPathRequiredException(Object pathRequiredException) {
        this.pathRequiredException = pathRequiredException;
        return this;
    }
    public openapisdk.models.shared.PostCommentForComparedCommitOutput postCommentForComparedCommitOutput;
    public PostCommentForComparedCommitResponse withPostCommentForComparedCommitOutput(openapisdk.models.shared.PostCommentForComparedCommitOutput postCommentForComparedCommitOutput) {
        this.postCommentForComparedCommitOutput = postCommentForComparedCommitOutput;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public PostCommentForComparedCommitResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public PostCommentForComparedCommitResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public PostCommentForComparedCommitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}