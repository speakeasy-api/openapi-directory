package openapisdk.models.operations;



public class ListLoggerDefinitionVersionsResponse {
    public Object badRequestException;
    public ListLoggerDefinitionVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListLoggerDefinitionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLoggerDefinitionVersionsResponse listLoggerDefinitionVersionsResponse;
    public ListLoggerDefinitionVersionsResponse withListLoggerDefinitionVersionsResponse(openapisdk.models.shared.ListLoggerDefinitionVersionsResponse listLoggerDefinitionVersionsResponse) {
        this.listLoggerDefinitionVersionsResponse = listLoggerDefinitionVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListLoggerDefinitionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}