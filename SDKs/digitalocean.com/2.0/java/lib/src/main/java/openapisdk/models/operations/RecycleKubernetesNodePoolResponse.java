package openapisdk.models.operations;



public class RecycleKubernetesNodePoolResponse {
    public String contentType;
    public RecycleKubernetesNodePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RecycleKubernetesNodePoolResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RecycleKubernetesNodePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RecycleKubernetesNodePool401ApplicationJson recycleKubernetesNodePool401ApplicationJSONObject;
    public RecycleKubernetesNodePoolResponse withRecycleKubernetesNodePool401ApplicationJsonObject(RecycleKubernetesNodePool401ApplicationJson recycleKubernetesNodePool401ApplicationJSONObject) {
        this.recycleKubernetesNodePool401ApplicationJSONObject = recycleKubernetesNodePool401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public RecycleKubernetesNodePoolResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}