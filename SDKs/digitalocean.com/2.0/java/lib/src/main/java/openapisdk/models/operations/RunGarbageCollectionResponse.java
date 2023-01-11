package openapisdk.models.operations;



public class RunGarbageCollectionResponse {
    public String contentType;
    public RunGarbageCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RunGarbageCollectionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RunGarbageCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RunGarbageCollection201ApplicationJson runGarbageCollection201ApplicationJSONObject;
    public RunGarbageCollectionResponse withRunGarbageCollection201ApplicationJsonObject(RunGarbageCollection201ApplicationJson runGarbageCollection201ApplicationJSONObject) {
        this.runGarbageCollection201ApplicationJSONObject = runGarbageCollection201ApplicationJSONObject;
        return this;
    }
    public RunGarbageCollection401ApplicationJson runGarbageCollection401ApplicationJSONObject;
    public RunGarbageCollectionResponse withRunGarbageCollection401ApplicationJsonObject(RunGarbageCollection401ApplicationJson runGarbageCollection401ApplicationJSONObject) {
        this.runGarbageCollection401ApplicationJSONObject = runGarbageCollection401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public RunGarbageCollectionResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}