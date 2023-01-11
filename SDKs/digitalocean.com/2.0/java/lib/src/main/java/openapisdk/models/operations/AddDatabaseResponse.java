package openapisdk.models.operations;



public class AddDatabaseResponse {
    public String contentType;
    public AddDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddDatabaseResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddDatabase201ApplicationJson addDatabase201ApplicationJSONObject;
    public AddDatabaseResponse withAddDatabase201ApplicationJsonObject(AddDatabase201ApplicationJson addDatabase201ApplicationJSONObject) {
        this.addDatabase201ApplicationJSONObject = addDatabase201ApplicationJSONObject;
        return this;
    }
    public AddDatabase401ApplicationJson addDatabase401ApplicationJSONObject;
    public AddDatabaseResponse withAddDatabase401ApplicationJsonObject(AddDatabase401ApplicationJson addDatabase401ApplicationJSONObject) {
        this.addDatabase401ApplicationJSONObject = addDatabase401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddDatabaseResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}