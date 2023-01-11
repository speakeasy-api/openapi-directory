package openapisdk.models.operations;



public class ListCoreDefinitionsResponse {
    public String contentType;
    public ListCoreDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCoreDefinitionsResponse listCoreDefinitionsResponse;
    public ListCoreDefinitionsResponse withListCoreDefinitionsResponse(openapisdk.models.shared.ListCoreDefinitionsResponse listCoreDefinitionsResponse) {
        this.listCoreDefinitionsResponse = listCoreDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public ListCoreDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}