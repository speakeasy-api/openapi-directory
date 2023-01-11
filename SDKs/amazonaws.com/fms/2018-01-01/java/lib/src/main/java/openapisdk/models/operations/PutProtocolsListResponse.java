package openapisdk.models.operations;



public class PutProtocolsListResponse {
    public String contentType;
    public PutProtocolsListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public PutProtocolsListResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidInputException;
    public PutProtocolsListResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object invalidOperationException;
    public PutProtocolsListResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object limitExceededException;
    public PutProtocolsListResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PutProtocolsListResponse putProtocolsListResponse;
    public PutProtocolsListResponse withPutProtocolsListResponse(openapisdk.models.shared.PutProtocolsListResponse putProtocolsListResponse) {
        this.putProtocolsListResponse = putProtocolsListResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PutProtocolsListResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutProtocolsListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}