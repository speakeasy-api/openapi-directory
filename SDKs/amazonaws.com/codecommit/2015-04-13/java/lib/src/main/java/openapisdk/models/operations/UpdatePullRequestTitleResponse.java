package openapisdk.models.operations;



public class UpdatePullRequestTitleResponse {
    public String contentType;
    public UpdatePullRequestTitleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidPullRequestIdException;
    public UpdatePullRequestTitleResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object invalidTitleException;
    public UpdatePullRequestTitleResponse withInvalidTitleException(Object invalidTitleException) {
        this.invalidTitleException = invalidTitleException;
        return this;
    }
    public Object pullRequestAlreadyClosedException;
    public UpdatePullRequestTitleResponse withPullRequestAlreadyClosedException(Object pullRequestAlreadyClosedException) {
        this.pullRequestAlreadyClosedException = pullRequestAlreadyClosedException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public UpdatePullRequestTitleResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public UpdatePullRequestTitleResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Long statusCode;
    public UpdatePullRequestTitleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object titleRequiredException;
    public UpdatePullRequestTitleResponse withTitleRequiredException(Object titleRequiredException) {
        this.titleRequiredException = titleRequiredException;
        return this;
    }
    public openapisdk.models.shared.UpdatePullRequestTitleOutput updatePullRequestTitleOutput;
    public UpdatePullRequestTitleResponse withUpdatePullRequestTitleOutput(openapisdk.models.shared.UpdatePullRequestTitleOutput updatePullRequestTitleOutput) {
        this.updatePullRequestTitleOutput = updatePullRequestTitleOutput;
        return this;
    }
}