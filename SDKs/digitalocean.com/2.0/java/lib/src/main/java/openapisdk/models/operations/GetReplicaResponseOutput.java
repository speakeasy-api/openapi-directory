package openapisdk.models.operations;



public class GetReplicaResponseOutput {
    public String contentType;
    public GetReplicaResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetReplicaResponseOutput withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetReplicaResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetReplica200ApplicationJsonOutput getReplica200ApplicationJSONObject;
    public GetReplicaResponseOutput withGetReplica200ApplicationJsonObject(GetReplica200ApplicationJsonOutput getReplica200ApplicationJSONObject) {
        this.getReplica200ApplicationJSONObject = getReplica200ApplicationJSONObject;
        return this;
    }
    public GetReplica401ApplicationJson getReplica401ApplicationJSONObject;
    public GetReplicaResponseOutput withGetReplica401ApplicationJsonObject(GetReplica401ApplicationJson getReplica401ApplicationJSONObject) {
        this.getReplica401ApplicationJSONObject = getReplica401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetReplicaResponseOutput withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}