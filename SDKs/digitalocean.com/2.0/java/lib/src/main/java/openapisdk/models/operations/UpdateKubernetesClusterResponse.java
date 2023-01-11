package openapisdk.models.operations;



public class UpdateKubernetesClusterResponse {
    public String contentType;
    public UpdateKubernetesClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateKubernetesClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateKubernetesClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateKubernetesCluster202ApplicationJSONAny;
    public UpdateKubernetesClusterResponse withUpdateKubernetesCluster202ApplicationJsonAny(Object updateKubernetesCluster202ApplicationJSONAny) {
        this.updateKubernetesCluster202ApplicationJSONAny = updateKubernetesCluster202ApplicationJSONAny;
        return this;
    }
    public UpdateKubernetesCluster401ApplicationJson updateKubernetesCluster401ApplicationJSONObject;
    public UpdateKubernetesClusterResponse withUpdateKubernetesCluster401ApplicationJsonObject(UpdateKubernetesCluster401ApplicationJson updateKubernetesCluster401ApplicationJSONObject) {
        this.updateKubernetesCluster401ApplicationJSONObject = updateKubernetesCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateKubernetesClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}