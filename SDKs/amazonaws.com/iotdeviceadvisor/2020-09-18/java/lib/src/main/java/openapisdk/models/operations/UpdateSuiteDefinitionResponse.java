package openapisdk.models.operations;



public class UpdateSuiteDefinitionResponse {
    public String contentType;
    public UpdateSuiteDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateSuiteDefinitionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public UpdateSuiteDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateSuiteDefinitionResponse updateSuiteDefinitionResponse;
    public UpdateSuiteDefinitionResponse withUpdateSuiteDefinitionResponse(openapisdk.models.shared.UpdateSuiteDefinitionResponse updateSuiteDefinitionResponse) {
        this.updateSuiteDefinitionResponse = updateSuiteDefinitionResponse;
        return this;
    }
    public Object validationException;
    public UpdateSuiteDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}