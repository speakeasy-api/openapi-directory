package openapisdk.models.operations;



public class ListDimensionsResponse {
    public String contentType;
    public ListDimensionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDimensionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDimensionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDimensionsResponse listDimensionsResponse;
    public ListDimensionsResponse withListDimensionsResponse(openapisdk.models.shared.ListDimensionsResponse listDimensionsResponse) {
        this.listDimensionsResponse = listDimensionsResponse;
        return this;
    }
    public Long statusCode;
    public ListDimensionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDimensionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}