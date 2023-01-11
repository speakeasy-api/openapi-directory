package openapisdk.models.operations;



public class PutRegistryNamespacesNamespaceResponse {
    public String contentType;
    public PutRegistryNamespacesNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Namespace namespace;
    public PutRegistryNamespacesNamespaceResponse withNamespace(openapisdk.models.shared.Namespace namespace) {
        this.namespace = namespace;
        return this;
    }
    public Long statusCode;
    public PutRegistryNamespacesNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}