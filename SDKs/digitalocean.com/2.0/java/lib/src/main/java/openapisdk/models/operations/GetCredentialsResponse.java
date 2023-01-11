package openapisdk.models.operations;



public class GetCredentialsResponse {
    public String contentType;
    public GetCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCredentialsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCredentials200ApplicationJson getCredentials200ApplicationJSONObject;
    public GetCredentialsResponse withGetCredentials200ApplicationJsonObject(GetCredentials200ApplicationJson getCredentials200ApplicationJSONObject) {
        this.getCredentials200ApplicationJSONObject = getCredentials200ApplicationJSONObject;
        return this;
    }
    public GetCredentials401ApplicationJson getCredentials401ApplicationJSONObject;
    public GetCredentialsResponse withGetCredentials401ApplicationJsonObject(GetCredentials401ApplicationJson getCredentials401ApplicationJSONObject) {
        this.getCredentials401ApplicationJSONObject = getCredentials401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetCredentialsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}