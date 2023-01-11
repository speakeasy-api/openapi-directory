package openapisdk.models.operations;



public class ListResourceDefinitionsResponse {
    public String contentType;
    public ListResourceDefinitionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListResourceDefinitionsResponse listResourceDefinitionsResponse;
    public ListResourceDefinitionsResponse withListResourceDefinitionsResponse(openapisdk.models.shared.ListResourceDefinitionsResponse listResourceDefinitionsResponse) {
        this.listResourceDefinitionsResponse = listResourceDefinitionsResponse;
        return this;
    }
    public Long statusCode;
    public ListResourceDefinitionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}