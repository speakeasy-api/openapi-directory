package openapisdk.models.operations;



public class ListSlotsResponse {
    public String contentType;
    public ListSlotsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSlotsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListSlotsResponse listSlotsResponse;
    public ListSlotsResponse withListSlotsResponse(openapisdk.models.shared.ListSlotsResponse listSlotsResponse) {
        this.listSlotsResponse = listSlotsResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListSlotsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListSlotsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListSlotsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListSlotsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}