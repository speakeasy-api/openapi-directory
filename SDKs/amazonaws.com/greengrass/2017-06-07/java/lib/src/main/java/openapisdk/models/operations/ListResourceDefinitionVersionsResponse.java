package openapisdk.models.operations;



public class ListResourceDefinitionVersionsResponse {
    public Object badRequestException;
    public ListResourceDefinitionVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListResourceDefinitionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListResourceDefinitionVersionsResponse listResourceDefinitionVersionsResponse;
    public ListResourceDefinitionVersionsResponse withListResourceDefinitionVersionsResponse(openapisdk.models.shared.ListResourceDefinitionVersionsResponse listResourceDefinitionVersionsResponse) {
        this.listResourceDefinitionVersionsResponse = listResourceDefinitionVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListResourceDefinitionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}