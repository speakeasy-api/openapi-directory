package openapisdk.models.operations;



public class PutPolicyResponse {
    public String contentType;
    public PutPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public PutPolicyResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidInputException;
    public PutPolicyResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidOperationException;
    public PutPolicyResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidTypeException;
    public PutPolicyResponse withInvalidTypeException(Object invalidTypeException) {
        this.invalidTypeException = invalidTypeException;
        return this;
    }
    public Object limitExceededException;
    public PutPolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutPolicyResponse putPolicyResponse;
    public PutPolicyResponse withPutPolicyResponse(openapisdk.models.shared.PutPolicyResponse putPolicyResponse) {
        this.putPolicyResponse = putPolicyResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}