package openapisdk.models.operations;



public class DeleteCommentContentResponse {
    public Object commentDeletedException;
    public DeleteCommentContentResponse withCommentDeletedException(Object commentDeletedException) {
        this.commentDeletedException = commentDeletedException;
        return this;
    }
    public Object commentDoesNotExistException;
    public DeleteCommentContentResponse withCommentDoesNotExistException(Object commentDoesNotExistException) {
        this.commentDoesNotExistException = commentDoesNotExistException;
        return this;
    }
    public Object commentIdRequiredException;
    public DeleteCommentContentResponse withCommentIdRequiredException(Object commentIdRequiredException) {
        this.commentIdRequiredException = commentIdRequiredException;
        return this;
    }
    public String contentType;
    public DeleteCommentContentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteCommentContentOutput deleteCommentContentOutput;
    public DeleteCommentContentResponse withDeleteCommentContentOutput(openapisdk.models.shared.DeleteCommentContentOutput deleteCommentContentOutput) {
        this.deleteCommentContentOutput = deleteCommentContentOutput;
        return this;
    }
    public Object invalidCommentIdException;
    public DeleteCommentContentResponse withInvalidCommentIdException(Object invalidCommentIdException) {
        this.invalidCommentIdException = invalidCommentIdException;
        return this;
    }
    public Long statusCode;
    public DeleteCommentContentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}