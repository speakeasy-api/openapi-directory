package openapisdk.models.operations;



public class GetDevEndpointsResponse {
    public String contentType;
    public GetDevEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetDevEndpointsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetDevEndpointsResponse getDevEndpointsResponse;
    public GetDevEndpointsResponse withGetDevEndpointsResponse(openapisdk.models.shared.GetDevEndpointsResponse getDevEndpointsResponse) {
        this.getDevEndpointsResponse = getDevEndpointsResponse;
        return this;
    }
    public Object internalServiceException;
    public GetDevEndpointsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetDevEndpointsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetDevEndpointsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetDevEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}