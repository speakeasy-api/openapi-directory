package openapisdk.models.operations;



public class GetKubernetesClusterResponse {
    public String contentType;
    public GetKubernetesClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetKubernetesClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetKubernetesClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getKubernetesCluster200ApplicationJSONAny;
    public GetKubernetesClusterResponse withGetKubernetesCluster200ApplicationJsonAny(Object getKubernetesCluster200ApplicationJSONAny) {
        this.getKubernetesCluster200ApplicationJSONAny = getKubernetesCluster200ApplicationJSONAny;
        return this;
    }
    public GetKubernetesCluster401ApplicationJson getKubernetesCluster401ApplicationJSONObject;
    public GetKubernetesClusterResponse withGetKubernetesCluster401ApplicationJsonObject(GetKubernetesCluster401ApplicationJson getKubernetesCluster401ApplicationJSONObject) {
        this.getKubernetesCluster401ApplicationJSONObject = getKubernetesCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetKubernetesClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}