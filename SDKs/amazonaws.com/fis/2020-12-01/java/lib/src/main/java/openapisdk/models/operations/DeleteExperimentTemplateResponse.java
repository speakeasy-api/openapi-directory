package openapisdk.models.operations;



public class DeleteExperimentTemplateResponse {
    public String contentType;
    public DeleteExperimentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteExperimentTemplateResponse deleteExperimentTemplateResponse;
    public DeleteExperimentTemplateResponse withDeleteExperimentTemplateResponse(openapisdk.models.shared.DeleteExperimentTemplateResponse deleteExperimentTemplateResponse) {
        this.deleteExperimentTemplateResponse = deleteExperimentTemplateResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteExperimentTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteExperimentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteExperimentTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}