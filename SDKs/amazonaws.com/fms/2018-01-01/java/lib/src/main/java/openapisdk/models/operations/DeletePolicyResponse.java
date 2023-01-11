package openapisdk.models.operations;



public class DeletePolicyResponse {
    public String contentType;
    public DeletePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public DeletePolicyResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidInputException;
    public DeletePolicyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidOperationException;
    public DeletePolicyResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object limitExceededException;
    public DeletePolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeletePolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeletePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}