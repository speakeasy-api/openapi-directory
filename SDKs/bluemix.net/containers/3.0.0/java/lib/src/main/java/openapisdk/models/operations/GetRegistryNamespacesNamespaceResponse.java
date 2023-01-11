package openapisdk.models.operations;



public class GetRegistryNamespacesNamespaceResponse {
    public String contentType;
    public GetRegistryNamespacesNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Namespace namespace;
    public GetRegistryNamespacesNamespaceResponse withNamespace(openapisdk.models.shared.Namespace namespace) {
        this.namespace = namespace;
        return this;
    }
    public Long statusCode;
    public GetRegistryNamespacesNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}