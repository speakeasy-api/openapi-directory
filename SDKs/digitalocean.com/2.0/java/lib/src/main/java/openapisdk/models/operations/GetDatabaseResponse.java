package openapisdk.models.operations;



public class GetDatabaseResponse {
    public String contentType;
    public GetDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDatabaseResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDatabase200ApplicationJson getDatabase200ApplicationJSONObject;
    public GetDatabaseResponse withGetDatabase200ApplicationJsonObject(GetDatabase200ApplicationJson getDatabase200ApplicationJSONObject) {
        this.getDatabase200ApplicationJSONObject = getDatabase200ApplicationJSONObject;
        return this;
    }
    public GetDatabase401ApplicationJson getDatabase401ApplicationJSONObject;
    public GetDatabaseResponse withGetDatabase401ApplicationJsonObject(GetDatabase401ApplicationJson getDatabase401ApplicationJSONObject) {
        this.getDatabase401ApplicationJSONObject = getDatabase401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDatabaseResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}