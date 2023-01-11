package openapisdk.models.operations;



public class CreateReplicaResponseOutput {
    public String contentType;
    public CreateReplicaResponseOutput withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateReplicaResponseOutput withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateReplicaResponseOutput withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CreateReplica201ApplicationJsonOutput createReplica201ApplicationJSONObject;
    public CreateReplicaResponseOutput withCreateReplica201ApplicationJsonObject(CreateReplica201ApplicationJsonOutput createReplica201ApplicationJSONObject) {
        this.createReplica201ApplicationJSONObject = createReplica201ApplicationJSONObject;
        return this;
    }
    public CreateReplica401ApplicationJson createReplica401ApplicationJSONObject;
    public CreateReplicaResponseOutput withCreateReplica401ApplicationJsonObject(CreateReplica401ApplicationJson createReplica401ApplicationJSONObject) {
        this.createReplica401ApplicationJSONObject = createReplica401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateReplicaResponseOutput withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}