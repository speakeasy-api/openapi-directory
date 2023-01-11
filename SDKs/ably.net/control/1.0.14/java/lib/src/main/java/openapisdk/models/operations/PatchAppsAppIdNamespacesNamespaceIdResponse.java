package openapisdk.models.operations;



public class PatchAppsAppIdNamespacesNamespaceIdResponse {
    public String contentType;
    public PatchAppsAppIdNamespacesNamespaceIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchAppsAppIdNamespacesNamespaceIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public PatchAppsAppIdNamespacesNamespaceIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.NamespaceResponse namespaceResponse;
    public PatchAppsAppIdNamespacesNamespaceIdResponse withNamespaceResponse(openapisdk.models.shared.NamespaceResponse namespaceResponse) {
        this.namespaceResponse = namespaceResponse;
        return this;
    }
}