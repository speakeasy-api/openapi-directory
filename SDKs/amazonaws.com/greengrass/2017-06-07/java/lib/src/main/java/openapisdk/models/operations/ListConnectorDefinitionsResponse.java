package openapisdk.models.operations;



public class ListConnectorDefinitionsResponse {
    public String contentType;
    public ListConnectorDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListConnectorDefinitionsResponse listConnectorDefinitionsResponse;
    public ListConnectorDefinitionsResponse withListConnectorDefinitionsResponse(openapisdk.models.shared.ListConnectorDefinitionsResponse listConnectorDefinitionsResponse) {
        this.listConnectorDefinitionsResponse = listConnectorDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public ListConnectorDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}