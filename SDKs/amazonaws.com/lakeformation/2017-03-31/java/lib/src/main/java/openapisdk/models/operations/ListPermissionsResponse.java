package openapisdk.models.operations;



public class ListPermissionsResponse {
    public String contentType;
    public ListPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListPermissionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListPermissionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListPermissionsResponse listPermissionsResponse;
    public ListPermissionsResponse withListPermissionsResponse(openapisdk.models.shared.ListPermissionsResponse listPermissionsResponse) {
        this.listPermissionsResponse = listPermissionsResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListPermissionsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}