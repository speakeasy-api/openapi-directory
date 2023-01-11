package openapisdk.models.operations;



public class ListDevEndpointsResponse {
    public String contentType;
    public ListDevEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListDevEndpointsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public ListDevEndpointsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListDevEndpointsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListDevEndpointsResponse listDevEndpointsResponse;
    public ListDevEndpointsResponse withListDevEndpointsResponse(openapisdk.models.shared.ListDevEndpointsResponse listDevEndpointsResponse) {
        this.listDevEndpointsResponse = listDevEndpointsResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListDevEndpointsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListDevEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}