package openapisdk.models.operations;



public class CreateSuiteDefinitionResponse {
    public String contentType;
    public CreateSuiteDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSuiteDefinitionResponse createSuiteDefinitionResponse;
    public CreateSuiteDefinitionResponse withCreateSuiteDefinitionResponse(openapisdk.models.shared.CreateSuiteDefinitionResponse createSuiteDefinitionResponse) {
        this.createSuiteDefinitionResponse = createSuiteDefinitionResponse;
        return this;
    }
    public Object internalServerException;
    public CreateSuiteDefinitionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public CreateSuiteDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateSuiteDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}