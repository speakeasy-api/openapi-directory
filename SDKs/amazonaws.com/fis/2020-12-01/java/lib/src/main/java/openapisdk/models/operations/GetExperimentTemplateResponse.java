package openapisdk.models.operations;



public class GetExperimentTemplateResponse {
    public String contentType;
    public GetExperimentTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetExperimentTemplateResponse getExperimentTemplateResponse;
    public GetExperimentTemplateResponse withGetExperimentTemplateResponse(openapisdk.models.shared.GetExperimentTemplateResponse getExperimentTemplateResponse) {
        this.getExperimentTemplateResponse = getExperimentTemplateResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetExperimentTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetExperimentTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetExperimentTemplateResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}