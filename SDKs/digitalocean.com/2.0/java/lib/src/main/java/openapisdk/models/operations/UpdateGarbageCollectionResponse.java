package openapisdk.models.operations;



public class UpdateGarbageCollectionResponse {
    public String contentType;
    public UpdateGarbageCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateGarbageCollectionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateGarbageCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateGarbageCollection200ApplicationJson updateGarbageCollection200ApplicationJSONObject;
    public UpdateGarbageCollectionResponse withUpdateGarbageCollection200ApplicationJsonObject(UpdateGarbageCollection200ApplicationJson updateGarbageCollection200ApplicationJSONObject) {
        this.updateGarbageCollection200ApplicationJSONObject = updateGarbageCollection200ApplicationJSONObject;
        return this;
    }
    public UpdateGarbageCollection401ApplicationJson updateGarbageCollection401ApplicationJSONObject;
    public UpdateGarbageCollectionResponse withUpdateGarbageCollection401ApplicationJsonObject(UpdateGarbageCollection401ApplicationJson updateGarbageCollection401ApplicationJSONObject) {
        this.updateGarbageCollection401ApplicationJSONObject = updateGarbageCollection401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateGarbageCollectionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}