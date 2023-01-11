package openapisdk.models.operations;



public class DestroyClusterResponse {
    public String contentType;
    public DestroyClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DestroyClusterResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DestroyClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DestroyCluster401ApplicationJson destroyCluster401ApplicationJSONObject;
    public DestroyClusterResponse withDestroyCluster401ApplicationJsonObject(DestroyCluster401ApplicationJson destroyCluster401ApplicationJSONObject) {
        this.destroyCluster401ApplicationJSONObject = destroyCluster401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DestroyClusterResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}