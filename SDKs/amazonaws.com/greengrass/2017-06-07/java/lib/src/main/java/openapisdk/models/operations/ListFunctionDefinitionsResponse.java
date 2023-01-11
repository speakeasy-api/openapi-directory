package openapisdk.models.operations;



public class ListFunctionDefinitionsResponse {
    public String contentType;
    public ListFunctionDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListFunctionDefinitionsResponse listFunctionDefinitionsResponse;
    public ListFunctionDefinitionsResponse withListFunctionDefinitionsResponse(openapisdk.models.shared.ListFunctionDefinitionsResponse listFunctionDefinitionsResponse) {
        this.listFunctionDefinitionsResponse = listFunctionDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public ListFunctionDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}