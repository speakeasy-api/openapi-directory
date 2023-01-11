package openapisdk.models.operations;



public class ListCoreDefinitionVersionsResponse {
    public Object badRequestException;
    public ListCoreDefinitionVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListCoreDefinitionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListCoreDefinitionVersionsResponse listCoreDefinitionVersionsResponse;
    public ListCoreDefinitionVersionsResponse withListCoreDefinitionVersionsResponse(openapisdk.models.shared.ListCoreDefinitionVersionsResponse listCoreDefinitionVersionsResponse) {
        this.listCoreDefinitionVersionsResponse = listCoreDefinitionVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListCoreDefinitionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}