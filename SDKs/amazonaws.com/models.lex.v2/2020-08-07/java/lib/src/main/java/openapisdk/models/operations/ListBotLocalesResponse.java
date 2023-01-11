package openapisdk.models.operations;



public class ListBotLocalesResponse {
    public String contentType;
    public ListBotLocalesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListBotLocalesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListBotLocalesResponse listBotLocalesResponse;
    public ListBotLocalesResponse withListBotLocalesResponse(openapisdk.models.shared.ListBotLocalesResponse listBotLocalesResponse) {
        this.listBotLocalesResponse = listBotLocalesResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListBotLocalesResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListBotLocalesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListBotLocalesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListBotLocalesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}