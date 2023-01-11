package openapisdk.models.operations;



public class UpdateLoggerDefinitionResponse {
    public Object badRequestException;
    public UpdateLoggerDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateLoggerDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateLoggerDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateLoggerDefinitionResponse;
    public UpdateLoggerDefinitionResponse withUpdateLoggerDefinitionResponse(java.util.Map<String, Object> updateLoggerDefinitionResponse) {
        this.updateLoggerDefinitionResponse = updateLoggerDefinitionResponse;
        return this;
    }
}