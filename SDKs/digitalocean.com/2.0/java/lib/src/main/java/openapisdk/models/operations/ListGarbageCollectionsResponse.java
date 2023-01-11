package openapisdk.models.operations;



public class ListGarbageCollectionsResponse {
    public String contentType;
    public ListGarbageCollectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListGarbageCollectionsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListGarbageCollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListGarbageCollections200ApplicationJson listGarbageCollections200ApplicationJSONObject;
    public ListGarbageCollectionsResponse withListGarbageCollections200ApplicationJsonObject(ListGarbageCollections200ApplicationJson listGarbageCollections200ApplicationJSONObject) {
        this.listGarbageCollections200ApplicationJSONObject = listGarbageCollections200ApplicationJSONObject;
        return this;
    }
    public ListGarbageCollections401ApplicationJson listGarbageCollections401ApplicationJSONObject;
    public ListGarbageCollectionsResponse withListGarbageCollections401ApplicationJsonObject(ListGarbageCollections401ApplicationJson listGarbageCollections401ApplicationJSONObject) {
        this.listGarbageCollections401ApplicationJSONObject = listGarbageCollections401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListGarbageCollectionsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}