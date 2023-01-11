package openapisdk.models.operations;



public class GetLoggerDefinitionResponse {
    public Object badRequestException;
    public GetLoggerDefinitionResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetLoggerDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLoggerDefinitionResponse getLoggerDefinitionResponse;
    public GetLoggerDefinitionResponse withGetLoggerDefinitionResponse(openapisdk.models.shared.GetLoggerDefinitionResponse getLoggerDefinitionResponse) {
        this.getLoggerDefinitionResponse = getLoggerDefinitionResponse;
        return this;
    }
    public Long statusCode;
    public GetLoggerDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}