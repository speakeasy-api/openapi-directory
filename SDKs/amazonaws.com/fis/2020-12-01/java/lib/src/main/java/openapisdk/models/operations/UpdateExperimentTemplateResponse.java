package openapisdk.models.operations;



public class UpdateExperimentTemplateResponse {
    public String contentType;
    public UpdateExperimentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateExperimentTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public UpdateExperimentTemplateResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public UpdateExperimentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateExperimentTemplateResponse updateExperimentTemplateResponse;
    public UpdateExperimentTemplateResponse withUpdateExperimentTemplateResponse(openapisdk.models.shared.UpdateExperimentTemplateResponse updateExperimentTemplateResponse) {
        this.updateExperimentTemplateResponse = updateExperimentTemplateResponse;
        return this;
    }
    public Object validationException;
    public UpdateExperimentTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}