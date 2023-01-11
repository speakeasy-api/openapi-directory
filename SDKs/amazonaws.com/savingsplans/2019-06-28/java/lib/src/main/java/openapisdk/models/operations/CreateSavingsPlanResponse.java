package openapisdk.models.operations;



public class CreateSavingsPlanResponse {
    public String contentType;
    public CreateSavingsPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSavingsPlanResponse createSavingsPlanResponse;
    public CreateSavingsPlanResponse withCreateSavingsPlanResponse(openapisdk.models.shared.CreateSavingsPlanResponse createSavingsPlanResponse) {
        this.createSavingsPlanResponse = createSavingsPlanResponse;
        return this;
    }
    public Object internalServerException;
    public CreateSavingsPlanResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateSavingsPlanResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateSavingsPlanResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateSavingsPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateSavingsPlanResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}