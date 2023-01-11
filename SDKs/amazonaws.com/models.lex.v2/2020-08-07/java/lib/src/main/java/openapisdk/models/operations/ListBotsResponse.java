package openapisdk.models.operations;



public class ListBotsResponse {
    public String contentType;
    public ListBotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListBotsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListBotsResponse listBotsResponse;
    public ListBotsResponse withListBotsResponse(openapisdk.models.shared.ListBotsResponse listBotsResponse) {
        this.listBotsResponse = listBotsResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListBotsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListBotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListBotsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListBotsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}