package openapisdk.models.operations;



public class DeleteSourceCredentialsResponse {
    public String contentType;
    public DeleteSourceCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteSourceCredentialsOutput deleteSourceCredentialsOutput;
    public DeleteSourceCredentialsResponse withDeleteSourceCredentialsOutput(openapisdk.models.shared.DeleteSourceCredentialsOutput deleteSourceCredentialsOutput) {
        this.deleteSourceCredentialsOutput = deleteSourceCredentialsOutput;
        return this;
    }
    public Object invalidInputException;
    public DeleteSourceCredentialsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteSourceCredentialsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSourceCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}