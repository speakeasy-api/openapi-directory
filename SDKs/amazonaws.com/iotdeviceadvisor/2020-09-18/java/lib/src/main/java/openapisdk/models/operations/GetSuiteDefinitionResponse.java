package openapisdk.models.operations;



public class GetSuiteDefinitionResponse {
    public String contentType;
    public GetSuiteDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSuiteDefinitionResponse getSuiteDefinitionResponse;
    public GetSuiteDefinitionResponse withGetSuiteDefinitionResponse(openapisdk.models.shared.GetSuiteDefinitionResponse getSuiteDefinitionResponse) {
        this.getSuiteDefinitionResponse = getSuiteDefinitionResponse;
        return this;
    }
    public Object internalServerException;
    public GetSuiteDefinitionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSuiteDefinitionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSuiteDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetSuiteDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}