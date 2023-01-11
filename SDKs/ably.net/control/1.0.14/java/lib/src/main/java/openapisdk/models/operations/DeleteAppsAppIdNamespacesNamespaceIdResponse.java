package openapisdk.models.operations;



public class DeleteAppsAppIdNamespacesNamespaceIdResponse {
    public String contentType;
    public DeleteAppsAppIdNamespacesNamespaceIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAppsAppIdNamespacesNamespaceIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteAppsAppIdNamespacesNamespaceIdResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}