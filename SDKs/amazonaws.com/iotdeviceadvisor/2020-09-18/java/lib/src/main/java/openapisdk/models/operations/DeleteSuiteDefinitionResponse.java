package openapisdk.models.operations;



public class DeleteSuiteDefinitionResponse {
    public String contentType;
    public DeleteSuiteDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSuiteDefinitionResponse;
    public DeleteSuiteDefinitionResponse withDeleteSuiteDefinitionResponse(java.util.Map<String, Object> deleteSuiteDefinitionResponse) {
        this.deleteSuiteDefinitionResponse = deleteSuiteDefinitionResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteSuiteDefinitionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DeleteSuiteDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteSuiteDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}