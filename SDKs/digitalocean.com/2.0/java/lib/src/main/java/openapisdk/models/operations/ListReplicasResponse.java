package openapisdk.models.operations;



public class ListReplicasResponse {
    public String contentType;
    public ListReplicasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListReplicasResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListReplicasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object listReplicas200ApplicationJSONAny;
    public ListReplicasResponse withListReplicas200ApplicationJsonAny(Object listReplicas200ApplicationJSONAny) {
        this.listReplicas200ApplicationJSONAny = listReplicas200ApplicationJSONAny;
        return this;
    }
    public ListReplicas401ApplicationJson listReplicas401ApplicationJSONObject;
    public ListReplicasResponse withListReplicas401ApplicationJsonObject(ListReplicas401ApplicationJson listReplicas401ApplicationJSONObject) {
        this.listReplicas401ApplicationJSONObject = listReplicas401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListReplicasResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}