package openapisdk.models.operations;



public class GetImageResponse {
    public String contentType;
    public GetImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetImageResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetImage200ApplicationJson getImage200ApplicationJSONObject;
    public GetImageResponse withGetImage200ApplicationJsonObject(GetImage200ApplicationJson getImage200ApplicationJSONObject) {
        this.getImage200ApplicationJSONObject = getImage200ApplicationJSONObject;
        return this;
    }
    public GetImage401ApplicationJson getImage401ApplicationJSONObject;
    public GetImageResponse withGetImage401ApplicationJsonObject(GetImage401ApplicationJson getImage401ApplicationJSONObject) {
        this.getImage401ApplicationJSONObject = getImage401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetImageResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}