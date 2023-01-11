package openapisdk.models.operations;



public class CreateLoggerDefinitionVersionResponse {
    public Object badRequestException;
    public CreateLoggerDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateLoggerDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLoggerDefinitionVersionResponse createLoggerDefinitionVersionResponse;
    public CreateLoggerDefinitionVersionResponse withCreateLoggerDefinitionVersionResponse(openapisdk.models.shared.CreateLoggerDefinitionVersionResponse createLoggerDefinitionVersionResponse) {
        this.createLoggerDefinitionVersionResponse = createLoggerDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public CreateLoggerDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}