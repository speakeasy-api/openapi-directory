package openapisdk.models.operations;



public class GetAppsAppIdNamespacesResponse {
    public String contentType;
    public GetAppsAppIdNamespacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAppsAppIdNamespacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetAppsAppIdNamespacesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public openapisdk.models.shared.NamespaceResponse[] namespaceResponses;
    public GetAppsAppIdNamespacesResponse withNamespaceResponses(openapisdk.models.shared.NamespaceResponse[] namespaceResponses) {
        this.namespaceResponses = namespaceResponses;
        return this;
    }
}