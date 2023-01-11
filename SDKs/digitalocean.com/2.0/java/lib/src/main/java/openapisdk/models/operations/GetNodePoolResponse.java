package openapisdk.models.operations;



public class GetNodePoolResponse {
    public String contentType;
    public GetNodePoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetNodePoolResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetNodePoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getNodePool200ApplicationJSONAny;
    public GetNodePoolResponse withGetNodePool200ApplicationJsonAny(Object getNodePool200ApplicationJSONAny) {
        this.getNodePool200ApplicationJSONAny = getNodePool200ApplicationJSONAny;
        return this;
    }
    public GetNodePool401ApplicationJson getNodePool401ApplicationJSONObject;
    public GetNodePoolResponse withGetNodePool401ApplicationJsonObject(GetNodePool401ApplicationJson getNodePool401ApplicationJSONObject) {
        this.getNodePool401ApplicationJSONObject = getNodePool401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetNodePoolResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}