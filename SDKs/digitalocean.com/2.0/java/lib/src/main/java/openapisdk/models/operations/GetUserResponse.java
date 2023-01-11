package openapisdk.models.operations;



public class GetUserResponse {
    public String contentType;
    public GetUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUser200ApplicationJson getUser200ApplicationJSONObject;
    public GetUserResponse withGetUser200ApplicationJsonObject(GetUser200ApplicationJson getUser200ApplicationJSONObject) {
        this.getUser200ApplicationJSONObject = getUser200ApplicationJSONObject;
        return this;
    }
    public GetUser401ApplicationJson getUser401ApplicationJSONObject;
    public GetUserResponse withGetUser401ApplicationJsonObject(GetUser401ApplicationJson getUser401ApplicationJSONObject) {
        this.getUser401ApplicationJSONObject = getUser401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetUserResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}