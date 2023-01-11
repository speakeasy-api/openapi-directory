package openapisdk.models.operations;



public class ListBotVersionsResponse {
    public String contentType;
    public ListBotVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListBotVersionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListBotVersionsResponse listBotVersionsResponse;
    public ListBotVersionsResponse withListBotVersionsResponse(openapisdk.models.shared.ListBotVersionsResponse listBotVersionsResponse) {
        this.listBotVersionsResponse = listBotVersionsResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListBotVersionsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListBotVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListBotVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListBotVersionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}