package openapisdk.models.operations;



public class UpdatePullRequestDescriptionResponse {
    public String contentType;
    public UpdatePullRequestDescriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidDescriptionException;
    public UpdatePullRequestDescriptionResponse withInvalidDescriptionException(Object invalidDescriptionException) {
        this.invalidDescriptionException = invalidDescriptionException;
        return this;
    }
    public Object invalidPullRequestIdException;
    public UpdatePullRequestDescriptionResponse withInvalidPullRequestIdException(Object invalidPullRequestIdException) {
        this.invalidPullRequestIdException = invalidPullRequestIdException;
        return this;
    }
    public Object pullRequestAlreadyClosedException;
    public UpdatePullRequestDescriptionResponse withPullRequestAlreadyClosedException(Object pullRequestAlreadyClosedException) {
        this.pullRequestAlreadyClosedException = pullRequestAlreadyClosedException;
        return this;
    }
    public Object pullRequestDoesNotExistException;
    public UpdatePullRequestDescriptionResponse withPullRequestDoesNotExistException(Object pullRequestDoesNotExistException) {
        this.pullRequestDoesNotExistException = pullRequestDoesNotExistException;
        return this;
    }
    public Object pullRequestIdRequiredException;
    public UpdatePullRequestDescriptionResponse withPullRequestIdRequiredException(Object pullRequestIdRequiredException) {
        this.pullRequestIdRequiredException = pullRequestIdRequiredException;
        return this;
    }
    public Long statusCode;
    public UpdatePullRequestDescriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePullRequestDescriptionOutput updatePullRequestDescriptionOutput;
    public UpdatePullRequestDescriptionResponse withUpdatePullRequestDescriptionOutput(openapisdk.models.shared.UpdatePullRequestDescriptionOutput updatePullRequestDescriptionOutput) {
        this.updatePullRequestDescriptionOutput = updatePullRequestDescriptionOutput;
        return this;
    }
}