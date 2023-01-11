package openapisdk.models.operations;



public class DeleteGitHubAccountTokenResponse {
    public String contentType;
    public DeleteGitHubAccountTokenResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteGitHubAccountTokenOutput deleteGitHubAccountTokenOutput;
    public DeleteGitHubAccountTokenResponse withDeleteGitHubAccountTokenOutput(openapisdk.models.shared.DeleteGitHubAccountTokenOutput deleteGitHubAccountTokenOutput) {
        this.deleteGitHubAccountTokenOutput = deleteGitHubAccountTokenOutput;
        return this;
    }
    public Object gitHubAccountTokenDoesNotExistException;
    public DeleteGitHubAccountTokenResponse withGitHubAccountTokenDoesNotExistException(Object gitHubAccountTokenDoesNotExistException) {
        this.gitHubAccountTokenDoesNotExistException = gitHubAccountTokenDoesNotExistException;
        return this;
    }
    public Object gitHubAccountTokenNameRequiredException;
    public DeleteGitHubAccountTokenResponse withGitHubAccountTokenNameRequiredException(Object gitHubAccountTokenNameRequiredException) {
        this.gitHubAccountTokenNameRequiredException = gitHubAccountTokenNameRequiredException;
        return this;
    }
    public Object invalidGitHubAccountTokenNameException;
    public DeleteGitHubAccountTokenResponse withInvalidGitHubAccountTokenNameException(Object invalidGitHubAccountTokenNameException) {
        this.invalidGitHubAccountTokenNameException = invalidGitHubAccountTokenNameException;
        return this;
    }
    public Object operationNotSupportedException;
    public DeleteGitHubAccountTokenResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceValidationException;
    public DeleteGitHubAccountTokenResponse withResourceValidationException(Object resourceValidationException) {
        this.resourceValidationException = resourceValidationException;
        return this;
    }
    public Long statusCode;
    public DeleteGitHubAccountTokenResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}