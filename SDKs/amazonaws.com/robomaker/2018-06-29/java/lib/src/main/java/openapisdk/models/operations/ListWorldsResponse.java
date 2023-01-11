package openapisdk.models.operations;



public class ListWorldsResponse {
    public String contentType;
    public ListWorldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListWorldsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public ListWorldsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListWorldsResponse listWorldsResponse;
    public ListWorldsResponse withListWorldsResponse(openapisdk.models.shared.ListWorldsResponse listWorldsResponse) {
        this.listWorldsResponse = listWorldsResponse;
        return this;
    }
    public Long statusCode;
    public ListWorldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListWorldsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}