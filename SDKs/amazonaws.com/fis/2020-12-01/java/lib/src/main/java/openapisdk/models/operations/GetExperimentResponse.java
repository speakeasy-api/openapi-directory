package openapisdk.models.operations;



public class GetExperimentResponse {
    public String contentType;
    public GetExperimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetExperimentResponse getExperimentResponse;
    public GetExperimentResponse withGetExperimentResponse(openapisdk.models.shared.GetExperimentResponse getExperimentResponse) {
        this.getExperimentResponse = getExperimentResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public GetExperimentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetExperimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetExperimentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}