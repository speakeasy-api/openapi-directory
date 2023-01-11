package openapisdk.models.operations;



public class ListNamespacesResponse {
    public String contentType;
    public ListNamespacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInput;
    public ListNamespacesResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public openapisdk.models.shared.ListNamespacesResponse listNamespacesResponse;
    public ListNamespacesResponse withListNamespacesResponse(openapisdk.models.shared.ListNamespacesResponse listNamespacesResponse) {
        this.listNamespacesResponse = listNamespacesResponse;
        return this;
    }
    public Long statusCode;
    public ListNamespacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}