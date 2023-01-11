package openapisdk.models.operations;



public class DestroyReplicaResponse {
    public String contentType;
    public DestroyReplicaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DestroyReplicaResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DestroyReplicaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DestroyReplica401ApplicationJson destroyReplica401ApplicationJSONObject;
    public DestroyReplicaResponse withDestroyReplica401ApplicationJsonObject(DestroyReplica401ApplicationJson destroyReplica401ApplicationJSONObject) {
        this.destroyReplica401ApplicationJSONObject = destroyReplica401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DestroyReplicaResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}