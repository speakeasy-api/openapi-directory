package openapisdk.models.operations;



public class UpdateCommentResponse {
    public Object commentContentRequiredException;
    public UpdateCommentResponse withCommentContentRequiredException(Object commentContentRequiredException) {
        this.commentContentRequiredException = commentContentRequiredException;
        return this;
    }
    public Object commentContentSizeLimitExceededException;
    public UpdateCommentResponse withCommentContentSizeLimitExceededException(Object commentContentSizeLimitExceededException) {
        this.commentContentSizeLimitExceededException = commentContentSizeLimitExceededException;
        return this;
    }
    public Object commentDeletedException;
    public UpdateCommentResponse withCommentDeletedException(Object commentDeletedException) {
        this.commentDeletedException = commentDeletedException;
        return this;
    }
    public Object commentDoesNotExistException;
    public UpdateCommentResponse withCommentDoesNotExistException(Object commentDoesNotExistException) {
        this.commentDoesNotExistException = commentDoesNotExistException;
        return this;
    }
    public Object commentIdRequiredException;
    public UpdateCommentResponse withCommentIdRequiredException(Object commentIdRequiredException) {
        this.commentIdRequiredException = commentIdRequiredException;
        return this;
    }
    public Object commentNotCreatedByCallerException;
    public UpdateCommentResponse withCommentNotCreatedByCallerException(Object commentNotCreatedByCallerException) {
        this.commentNotCreatedByCallerException = commentNotCreatedByCallerException;
        return this;
    }
    public String contentType;
    public UpdateCommentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidCommentIdException;
    public UpdateCommentResponse withInvalidCommentIdException(Object invalidCommentIdException) {
        this.invalidCommentIdException = invalidCommentIdException;
        return this;
    }
    public Long statusCode;
    public UpdateCommentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateCommentOutput updateCommentOutput;
    public UpdateCommentResponse withUpdateCommentOutput(openapisdk.models.shared.UpdateCommentOutput updateCommentOutput) {
        this.updateCommentOutput = updateCommentOutput;
        return this;
    }
}