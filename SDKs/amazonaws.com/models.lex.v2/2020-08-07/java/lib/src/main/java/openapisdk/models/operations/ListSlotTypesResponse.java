package openapisdk.models.operations;



public class ListSlotTypesResponse {
    public String contentType;
    public ListSlotTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListSlotTypesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListSlotTypesResponse listSlotTypesResponse;
    public ListSlotTypesResponse withListSlotTypesResponse(openapisdk.models.shared.ListSlotTypesResponse listSlotTypesResponse) {
        this.listSlotTypesResponse = listSlotTypesResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListSlotTypesResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListSlotTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListSlotTypesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListSlotTypesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}