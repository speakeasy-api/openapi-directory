package openapisdk.models.operations;



public class ListResourcesResponse {
    public String contentType;
    public ListResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListResourcesResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListResourcesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListResourcesResponse listResourcesResponse;
    public ListResourcesResponse withListResourcesResponse(openapisdk.models.shared.ListResourcesResponse listResourcesResponse) {
        this.listResourcesResponse = listResourcesResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListResourcesResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}