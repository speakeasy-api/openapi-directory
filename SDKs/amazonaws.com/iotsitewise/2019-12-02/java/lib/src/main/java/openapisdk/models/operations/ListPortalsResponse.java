package openapisdk.models.operations;



public class ListPortalsResponse {
    public String contentType;
    public ListPortalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListPortalsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListPortalsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPortalsResponse listPortalsResponse;
    public ListPortalsResponse withListPortalsResponse(openapisdk.models.shared.ListPortalsResponse listPortalsResponse) {
        this.listPortalsResponse = listPortalsResponse;
        return this;
    }
    public Long statusCode;
    public ListPortalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPortalsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}