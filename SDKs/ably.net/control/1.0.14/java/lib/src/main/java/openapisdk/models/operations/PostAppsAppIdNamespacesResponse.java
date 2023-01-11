package openapisdk.models.operations;



public class PostAppsAppIdNamespacesResponse {
    public String contentType;
    public PostAppsAppIdNamespacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostAppsAppIdNamespacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PostAppsAppIdNamespacesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.NamespaceResponse namespaceResponse;
    public PostAppsAppIdNamespacesResponse withNamespaceResponse(openapisdk.models.shared.NamespaceResponse namespaceResponse) {
        this.namespaceResponse = namespaceResponse;
        return this;
    }
}