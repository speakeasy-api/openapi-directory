package openapisdk.models.operations;



public class ListLfTagsResponse {
    public String contentType;
    public ListLfTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListLfTagsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public ListLfTagsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListLfTagsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListLfTagsResponse listLFTagsResponse;
    public ListLfTagsResponse withListLfTagsResponse(openapisdk.models.shared.ListLfTagsResponse listLFTagsResponse) {
        this.listLFTagsResponse = listLFTagsResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListLfTagsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListLfTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}