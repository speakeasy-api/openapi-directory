package openapisdk.models.operations;



public class ListFunctionDefinitionVersionsResponse {
    public Object badRequestException;
    public ListFunctionDefinitionVersionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListFunctionDefinitionVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFunctionDefinitionVersionsResponse listFunctionDefinitionVersionsResponse;
    public ListFunctionDefinitionVersionsResponse withListFunctionDefinitionVersionsResponse(openapisdk.models.shared.ListFunctionDefinitionVersionsResponse listFunctionDefinitionVersionsResponse) {
        this.listFunctionDefinitionVersionsResponse = listFunctionDefinitionVersionsResponse;
        return this;
    }
    public Long statusCode;
    public ListFunctionDefinitionVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}