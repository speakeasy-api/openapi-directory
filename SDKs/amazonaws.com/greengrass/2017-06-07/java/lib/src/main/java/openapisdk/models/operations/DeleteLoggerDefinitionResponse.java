package openapisdk.models.operations;



public class DeleteLoggerDefinitionResponse {
    public Object badRequestException;
    public DeleteLoggerDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteLoggerDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteLoggerDefinitionResponse;
    public DeleteLoggerDefinitionResponse withDeleteLoggerDefinitionResponse(java.util.Map<String, Object> deleteLoggerDefinitionResponse) {
        this.deleteLoggerDefinitionResponse = deleteLoggerDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public DeleteLoggerDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}