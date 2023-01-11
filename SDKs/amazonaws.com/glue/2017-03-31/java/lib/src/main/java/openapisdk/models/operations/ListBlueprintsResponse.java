package openapisdk.models.operations;



public class ListBlueprintsResponse {
    public String contentType;
    public ListBlueprintsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ListBlueprintsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListBlueprintsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListBlueprintsResponse listBlueprintsResponse;
    public ListBlueprintsResponse withListBlueprintsResponse(openapisdk.models.shared.ListBlueprintsResponse listBlueprintsResponse) {
        this.listBlueprintsResponse = listBlueprintsResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListBlueprintsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListBlueprintsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}