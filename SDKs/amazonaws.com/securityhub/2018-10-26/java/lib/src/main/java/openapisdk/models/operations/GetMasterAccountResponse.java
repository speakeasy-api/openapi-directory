package openapisdk.models.operations;



public class GetMasterAccountResponse {
    public String contentType;
    public GetMasterAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMasterAccountResponse getMasterAccountResponse;
    public GetMasterAccountResponse withGetMasterAccountResponse(openapisdk.models.shared.GetMasterAccountResponse getMasterAccountResponse) {
        this.getMasterAccountResponse = getMasterAccountResponse;
        return this;
    }
    public Object internalException;
    public GetMasterAccountResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public GetMasterAccountResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public GetMasterAccountResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object limitExceededException;
    public GetMasterAccountResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMasterAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMasterAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}