package openapisdk.models.operations;



public class ListBuiltInIntentsResponse {
    public String contentType;
    public ListBuiltInIntentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListBuiltInIntentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListBuiltInIntentsResponse listBuiltInIntentsResponse;
    public ListBuiltInIntentsResponse withListBuiltInIntentsResponse(openapisdk.models.shared.ListBuiltInIntentsResponse listBuiltInIntentsResponse) {
        this.listBuiltInIntentsResponse = listBuiltInIntentsResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListBuiltInIntentsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListBuiltInIntentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListBuiltInIntentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListBuiltInIntentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}