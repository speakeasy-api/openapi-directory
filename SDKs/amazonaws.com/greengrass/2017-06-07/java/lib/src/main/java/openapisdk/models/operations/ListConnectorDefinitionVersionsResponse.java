package openapisdk.models.operations;



public class ListConnectorDefinitionVersionsResponse {
    public Object badRequestException;
    public ListConnectorDefinitionVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListConnectorDefinitionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectorDefinitionVersionsResponse listConnectorDefinitionVersionsResponse;
    public ListConnectorDefinitionVersionsResponse withListConnectorDefinitionVersionsResponse(openapisdk.models.shared.ListConnectorDefinitionVersionsResponse listConnectorDefinitionVersionsResponse) {
        this.listConnectorDefinitionVersionsResponse = listConnectorDefinitionVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListConnectorDefinitionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}