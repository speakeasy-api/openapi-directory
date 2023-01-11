package openapisdk.models.operations;



public class GetStoredQueryResponse {
    public String contentType;
    public GetStoredQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetStoredQueryResponse getStoredQueryResponse;
    public GetStoredQueryResponse withGetStoredQueryResponse(openapisdk.models.shared.GetStoredQueryResponse getStoredQueryResponse) {
        this.getStoredQueryResponse = getStoredQueryResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetStoredQueryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetStoredQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetStoredQueryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}