package openapisdk.models.operations;



public class CreateLoggerDefinitionResponse {
    public Object badRequestException;
    public CreateLoggerDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateLoggerDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLoggerDefinitionResponse createLoggerDefinitionResponse;
    public CreateLoggerDefinitionResponse withCreateLoggerDefinitionResponse(openapisdk.models.shared.CreateLoggerDefinitionResponse createLoggerDefinitionResponse) {
        this.createLoggerDefinitionResponse = createLoggerDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public CreateLoggerDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}