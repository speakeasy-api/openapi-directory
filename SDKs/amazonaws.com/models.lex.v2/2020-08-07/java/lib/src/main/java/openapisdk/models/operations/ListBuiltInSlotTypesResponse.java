package openapisdk.models.operations;



public class ListBuiltInSlotTypesResponse {
    public String contentType;
    public ListBuiltInSlotTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListBuiltInSlotTypesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListBuiltInSlotTypesResponse listBuiltInSlotTypesResponse;
    public ListBuiltInSlotTypesResponse withListBuiltInSlotTypesResponse(openapisdk.models.shared.ListBuiltInSlotTypesResponse listBuiltInSlotTypesResponse) {
        this.listBuiltInSlotTypesResponse = listBuiltInSlotTypesResponse;
        return this;
    }
    public Object serviceQuotaExceededException;
    public ListBuiltInSlotTypesResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public ListBuiltInSlotTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListBuiltInSlotTypesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListBuiltInSlotTypesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}