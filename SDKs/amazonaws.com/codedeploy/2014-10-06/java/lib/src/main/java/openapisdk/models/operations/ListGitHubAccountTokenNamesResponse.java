package openapisdk.models.operations;



public class ListGitHubAccountTokenNamesResponse {
    public String contentType;
    public ListGitHubAccountTokenNamesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListGitHubAccountTokenNamesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListGitHubAccountTokenNamesOutput listGitHubAccountTokenNamesOutput;
    public ListGitHubAccountTokenNamesResponse withListGitHubAccountTokenNamesOutput(openapisdk.models.shared.ListGitHubAccountTokenNamesOutput listGitHubAccountTokenNamesOutput) {
        this.listGitHubAccountTokenNamesOutput = listGitHubAccountTokenNamesOutput;
        return this;
    }
    public Object operationNotSupportedException;
    public ListGitHubAccountTokenNamesResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceValidationException;
    public ListGitHubAccountTokenNamesResponse withResourceValidationException(Object resourceValidationException) {
        this.resourceValidationException = resourceValidationException;
        return this;
    }
    public Long statusCode;
    public ListGitHubAccountTokenNamesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}