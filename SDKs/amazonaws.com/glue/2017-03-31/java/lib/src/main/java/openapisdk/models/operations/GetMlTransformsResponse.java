package openapisdk.models.operations;



public class GetMlTransformsResponse {
    public String contentType;
    public GetMlTransformsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetMlTransformsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetMlTransformsResponse getMLTransformsResponse;
    public GetMlTransformsResponse withGetMlTransformsResponse(openapisdk.models.shared.GetMlTransformsResponse getMLTransformsResponse) {
        this.getMLTransformsResponse = getMLTransformsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetMlTransformsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetMlTransformsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetMlTransformsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetMlTransformsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}