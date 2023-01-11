package openapisdk.models.operations;



public class GetDevEndpointResponse {
    public String contentType;
    public GetDevEndpointResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetDevEndpointResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetDevEndpointResponse getDevEndpointResponse;
    public GetDevEndpointResponse withGetDevEndpointResponse(openapisdk.models.shared.GetDevEndpointResponse getDevEndpointResponse) {
        this.getDevEndpointResponse = getDevEndpointResponse;
        return this;
    }
    public Object internalServiceException;
    public GetDevEndpointResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetDevEndpointResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetDevEndpointResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetDevEndpointResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}