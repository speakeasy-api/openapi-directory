package openapisdk.models.operations;



public class GetLoggerDefinitionVersionResponse {
    public Object badRequestException;
    public GetLoggerDefinitionVersionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetLoggerDefinitionVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLoggerDefinitionVersionResponse getLoggerDefinitionVersionResponse;
    public GetLoggerDefinitionVersionResponse withGetLoggerDefinitionVersionResponse(openapisdk.models.shared.GetLoggerDefinitionVersionResponse getLoggerDefinitionVersionResponse) {
        this.getLoggerDefinitionVersionResponse = getLoggerDefinitionVersionResponse;
        return this;
    }
    public Long statusCode;
    public GetLoggerDefinitionVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}