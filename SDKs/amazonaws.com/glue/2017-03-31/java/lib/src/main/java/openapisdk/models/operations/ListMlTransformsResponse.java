package openapisdk.models.operations;



public class ListMlTransformsResponse {
    public String contentType;
    public ListMlTransformsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public ListMlTransformsResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public ListMlTransformsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public ListMlTransformsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListMlTransformsResponse listMLTransformsResponse;
    public ListMlTransformsResponse withListMlTransformsResponse(openapisdk.models.shared.ListMlTransformsResponse listMLTransformsResponse) {
        this.listMLTransformsResponse = listMLTransformsResponse;
        return this;
    }
    public Object operationTimeoutException;
    public ListMlTransformsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public ListMlTransformsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}