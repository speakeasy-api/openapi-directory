package openapisdk.models.operations;



public class GetSuiteRunResponse {
    public String contentType;
    public GetSuiteRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSuiteRunResponse getSuiteRunResponse;
    public GetSuiteRunResponse withGetSuiteRunResponse(openapisdk.models.shared.GetSuiteRunResponse getSuiteRunResponse) {
        this.getSuiteRunResponse = getSuiteRunResponse;
        return this;
    }
    public Object internalServerException;
    public GetSuiteRunResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSuiteRunResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSuiteRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetSuiteRunResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}