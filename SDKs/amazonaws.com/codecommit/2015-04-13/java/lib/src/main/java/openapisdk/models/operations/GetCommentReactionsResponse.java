package openapisdk.models.operations;



public class GetCommentReactionsResponse {
    public Object commentDeletedException;
    public GetCommentReactionsResponse withCommentDeletedException(Object commentDeletedException) {
        this.commentDeletedException = commentDeletedException;
        return this;
    }
    public Object commentDoesNotExistException;
    public GetCommentReactionsResponse withCommentDoesNotExistException(Object commentDoesNotExistException) {
        this.commentDoesNotExistException = commentDoesNotExistException;
        return this;
    }
    public Object commentIdRequiredException;
    public GetCommentReactionsResponse withCommentIdRequiredException(Object commentIdRequiredException) {
        this.commentIdRequiredException = commentIdRequiredException;
        return this;
    }
    public String contentType;
    public GetCommentReactionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCommentReactionsOutput getCommentReactionsOutput;
    public GetCommentReactionsResponse withGetCommentReactionsOutput(openapisdk.models.shared.GetCommentReactionsOutput getCommentReactionsOutput) {
        this.getCommentReactionsOutput = getCommentReactionsOutput;
        return this;
    }
    public Object invalidCommentIdException;
    public GetCommentReactionsResponse withInvalidCommentIdException(Object invalidCommentIdException) {
        this.invalidCommentIdException = invalidCommentIdException;
        return this;
    }
    public Object invalidContinuationTokenException;
    public GetCommentReactionsResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public GetCommentReactionsResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public Object invalidReactionUserArnException;
    public GetCommentReactionsResponse withInvalidReactionUserArnException(Object invalidReactionUserArnException) {
        this.invalidReactionUserArnException = invalidReactionUserArnException;
        return this;
    }
    public Long statusCode;
    public GetCommentReactionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}