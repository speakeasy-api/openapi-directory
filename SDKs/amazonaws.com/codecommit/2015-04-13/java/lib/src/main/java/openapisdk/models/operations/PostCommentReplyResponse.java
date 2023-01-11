package openapisdk.models.operations;



public class PostCommentReplyResponse {
    public Object clientRequestTokenRequiredException;
    public PostCommentReplyResponse withClientRequestTokenRequiredException(Object clientRequestTokenRequiredException) {
        this.clientRequestTokenRequiredException = clientRequestTokenRequiredException;
        return this;
    }
    public Object commentContentRequiredException;
    public PostCommentReplyResponse withCommentContentRequiredException(Object commentContentRequiredException) {
        this.commentContentRequiredException = commentContentRequiredException;
        return this;
    }
    public Object commentContentSizeLimitExceededException;
    public PostCommentReplyResponse withCommentContentSizeLimitExceededException(Object commentContentSizeLimitExceededException) {
        this.commentContentSizeLimitExceededException = commentContentSizeLimitExceededException;
        return this;
    }
    public Object commentDoesNotExistException;
    public PostCommentReplyResponse withCommentDoesNotExistException(Object commentDoesNotExistException) {
        this.commentDoesNotExistException = commentDoesNotExistException;
        return this;
    }
    public Object commentIdRequiredException;
    public PostCommentReplyResponse withCommentIdRequiredException(Object commentIdRequiredException) {
        this.commentIdRequiredException = commentIdRequiredException;
        return this;
    }
    public String contentType;
    public PostCommentReplyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotencyParameterMismatchException;
    public PostCommentReplyResponse withIdempotencyParameterMismatchException(Object idempotencyParameterMismatchException) {
        this.idempotencyParameterMismatchException = idempotencyParameterMismatchException;
        return this;
    }
    public Object invalidClientRequestTokenException;
    public PostCommentReplyResponse withInvalidClientRequestTokenException(Object invalidClientRequestTokenException) {
        this.invalidClientRequestTokenException = invalidClientRequestTokenException;
        return this;
    }
    public Object invalidCommentIdException;
    public PostCommentReplyResponse withInvalidCommentIdException(Object invalidCommentIdException) {
        this.invalidCommentIdException = invalidCommentIdException;
        return this;
    }
    public openapisdk.models.shared.PostCommentReplyOutput postCommentReplyOutput;
    public PostCommentReplyResponse withPostCommentReplyOutput(openapisdk.models.shared.PostCommentReplyOutput postCommentReplyOutput) {
        this.postCommentReplyOutput = postCommentReplyOutput;
        return this;
    }
    public Long statusCode;
    public PostCommentReplyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}