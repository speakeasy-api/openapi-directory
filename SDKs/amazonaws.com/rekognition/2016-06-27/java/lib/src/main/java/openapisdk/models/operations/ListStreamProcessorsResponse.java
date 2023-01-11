package openapisdk.models.operations;



public class ListStreamProcessorsResponse {
    public Object accessDeniedException;
    public ListStreamProcessorsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListStreamProcessorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ListStreamProcessorsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListStreamProcessorsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidParameterException;
    public ListStreamProcessorsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListStreamProcessorsResponse listStreamProcessorsResponse;
    public ListStreamProcessorsResponse withListStreamProcessorsResponse(openapisdk.models.shared.ListStreamProcessorsResponse listStreamProcessorsResponse) {
        this.listStreamProcessorsResponse = listStreamProcessorsResponse;
        return this;
    }
    public Object provisionedThroughputExceededException;
    public ListStreamProcessorsResponse withProvisionedThroughputExceededException(Object provisionedThroughputExceededException) {
        this.provisionedThroughputExceededException = provisionedThroughputExceededException;
        return this;
    }
    public Long statusCode;
    public ListStreamProcessorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListStreamProcessorsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}