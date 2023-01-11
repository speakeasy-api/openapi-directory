package openapisdk.models.operations;



public class CreateKubernetesClusterResponse {
    public String contentType;
    public CreateKubernetesClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateKubernetesClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateKubernetesClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createKubernetesCluster201ApplicationJSONAny;
    public CreateKubernetesClusterResponse withCreateKubernetesCluster201ApplicationJsonAny(Object createKubernetesCluster201ApplicationJSONAny) {
        this.createKubernetesCluster201ApplicationJSONAny = createKubernetesCluster201ApplicationJSONAny;
        return this;
    }
    public CreateKubernetesCluster401ApplicationJson createKubernetesCluster401ApplicationJSONObject;
    public CreateKubernetesClusterResponse withCreateKubernetesCluster401ApplicationJsonObject(CreateKubernetesCluster401ApplicationJson createKubernetesCluster401ApplicationJSONObject) {
        this.createKubernetesCluster401ApplicationJSONObject = createKubernetesCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateKubernetesClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}