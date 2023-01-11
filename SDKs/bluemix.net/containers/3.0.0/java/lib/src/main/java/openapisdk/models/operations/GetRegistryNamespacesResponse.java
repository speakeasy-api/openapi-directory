package openapisdk.models.operations;



public class GetRegistryNamespacesResponse {
    public String contentType;
    public GetRegistryNamespacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Namespace namespace;
    public GetRegistryNamespacesResponse withNamespace(openapisdk.models.shared.Namespace namespace) {
        this.namespace = namespace;
        return this;
    }
    public Long statusCode;
    public GetRegistryNamespacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}