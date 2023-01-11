package openapisdk.models.operations;



public class ListIntentsResponse {
    public String contentType;
    public ListIntentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListIntentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListIntentsResponse listIntentsResponse;
    public ListIntentsResponse withListIntentsResponse(openapisdk.models.shared.ListIntentsResponse listIntentsResponse) {
        this.listIntentsResponse = listIntentsResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListIntentsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListIntentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListIntentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListIntentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}