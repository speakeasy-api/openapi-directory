package openapisdk.models.operations;



public class PutCommentReactionResponse {
    public Object commentDeletedException;
    public PutCommentReactionResponse withCommentDeletedException(Object commentDeletedException) {
        this.commentDeletedException = commentDeletedException;
        return this;
    }
    public Object commentDoesNotExistException;
    public PutCommentReactionResponse withCommentDoesNotExistException(Object commentDoesNotExistException) {
        this.commentDoesNotExistException = commentDoesNotExistException;
        return this;
    }
    public Object commentIdRequiredException;
    public PutCommentReactionResponse withCommentIdRequiredException(Object commentIdRequiredException) {
        this.commentIdRequiredException = commentIdRequiredException;
        return this;
    }
    public String contentType;
    public PutCommentReactionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidCommentIdException;
    public PutCommentReactionResponse withInvalidCommentIdException(Object invalidCommentIdException) {
        this.invalidCommentIdException = invalidCommentIdException;
        return this;
    }
    public Object invalidReactionValueException;
    public PutCommentReactionResponse withInvalidReactionValueException(Object invalidReactionValueException) {
        this.invalidReactionValueException = invalidReactionValueException;
        return this;
    }
    public Object reactionLimitExceededException;
    public PutCommentReactionResponse withReactionLimitExceededException(Object reactionLimitExceededException) {
        this.reactionLimitExceededException = reactionLimitExceededException;
        return this;
    }
    public Object reactionValueRequiredException;
    public PutCommentReactionResponse withReactionValueRequiredException(Object reactionValueRequiredException) {
        this.reactionValueRequiredException = reactionValueRequiredException;
        return this;
    }
    public Long statusCode;
    public PutCommentReactionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}