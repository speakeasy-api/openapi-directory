package openapisdk.models.operations;



public class DeleteKubernetesClusterResponse {
    public String contentType;
    public DeleteKubernetesClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DeleteKubernetesClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DeleteKubernetesClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DeleteKubernetesCluster401ApplicationJson deleteKubernetesCluster401ApplicationJSONObject;
    public DeleteKubernetesClusterResponse withDeleteKubernetesCluster401ApplicationJsonObject(DeleteKubernetesCluster401ApplicationJson deleteKubernetesCluster401ApplicationJSONObject) {
        this.deleteKubernetesCluster401ApplicationJSONObject = deleteKubernetesCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DeleteKubernetesClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}