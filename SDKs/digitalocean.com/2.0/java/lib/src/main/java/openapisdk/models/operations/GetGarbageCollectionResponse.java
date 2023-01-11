package openapisdk.models.operations;



public class GetGarbageCollectionResponse {
    public String contentType;
    public GetGarbageCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetGarbageCollectionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetGarbageCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetGarbageCollection200ApplicationJson getGarbageCollection200ApplicationJSONObject;
    public GetGarbageCollectionResponse withGetGarbageCollection200ApplicationJsonObject(GetGarbageCollection200ApplicationJson getGarbageCollection200ApplicationJSONObject) {
        this.getGarbageCollection200ApplicationJSONObject = getGarbageCollection200ApplicationJSONObject;
        return this;
    }
    public GetGarbageCollection401ApplicationJson getGarbageCollection401ApplicationJSONObject;
    public GetGarbageCollectionResponse withGetGarbageCollection401ApplicationJsonObject(GetGarbageCollection401ApplicationJson getGarbageCollection401ApplicationJSONObject) {
        this.getGarbageCollection401ApplicationJSONObject = getGarbageCollection401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetGarbageCollectionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}