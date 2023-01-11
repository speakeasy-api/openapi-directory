package openapisdk.models.operations;



public class StopExperimentResponse {
    public String contentType;
    public StopExperimentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public StopExperimentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public StopExperimentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopExperimentResponse stopExperimentResponse;
    public StopExperimentResponse withStopExperimentResponse(openapisdk.models.shared.StopExperimentResponse stopExperimentResponse) {
        this.stopExperimentResponse = stopExperimentResponse;
        return this;
    }
    public Object validationException;
    public StopExperimentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}