package openapisdk.models.operations;



public class ListLoggerDefinitionsResponse {
    public String contentType;
    public ListLoggerDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListLoggerDefinitionsResponse listLoggerDefinitionsResponse;
    public ListLoggerDefinitionsResponse withListLoggerDefinitionsResponse(openapisdk.models.shared.ListLoggerDefinitionsResponse listLoggerDefinitionsResponse) {
        this.listLoggerDefinitionsResponse = listLoggerDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public ListLoggerDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}