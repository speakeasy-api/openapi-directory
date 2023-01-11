package openapisdk.models.operations;



public class ModifyReportDefinitionResponse {
    public String contentType;
    public ModifyReportDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ModifyReportDefinitionResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public java.util.Map<String, Object> modifyReportDefinitionResponse;
    public ModifyReportDefinitionResponse withModifyReportDefinitionResponse(java.util.Map<String, Object> modifyReportDefinitionResponse) {
        this.modifyReportDefinitionResponse = modifyReportDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public ModifyReportDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ModifyReportDefinitionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}