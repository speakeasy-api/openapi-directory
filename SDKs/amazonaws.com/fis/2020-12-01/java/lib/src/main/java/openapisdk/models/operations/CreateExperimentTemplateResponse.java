package openapisdk.models.operations;



public class CreateExperimentTemplateResponse {
    public Object conflictException;
    public CreateExperimentTemplateResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateExperimentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateExperimentTemplateResponse createExperimentTemplateResponse;
    public CreateExperimentTemplateResponse withCreateExperimentTemplateResponse(openapisdk.models.shared.CreateExperimentTemplateResponse createExperimentTemplateResponse) {
        this.createExperimentTemplateResponse = createExperimentTemplateResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateExperimentTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateExperimentTemplateResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateExperimentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateExperimentTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}