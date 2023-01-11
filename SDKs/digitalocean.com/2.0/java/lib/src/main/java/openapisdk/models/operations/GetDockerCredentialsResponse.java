package openapisdk.models.operations;



public class GetDockerCredentialsResponse {
    public String contentType;
    public GetDockerCredentialsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDockerCredentialsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDockerCredentialsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDockerCredentials200ApplicationJson getDockerCredentials200ApplicationJSONObject;
    public GetDockerCredentialsResponse withGetDockerCredentials200ApplicationJsonObject(GetDockerCredentials200ApplicationJson getDockerCredentials200ApplicationJSONObject) {
        this.getDockerCredentials200ApplicationJSONObject = getDockerCredentials200ApplicationJSONObject;
        return this;
    }
    public GetDockerCredentials401ApplicationJson getDockerCredentials401ApplicationJSONObject;
    public GetDockerCredentialsResponse withGetDockerCredentials401ApplicationJsonObject(GetDockerCredentials401ApplicationJson getDockerCredentials401ApplicationJSONObject) {
        this.getDockerCredentials401ApplicationJSONObject = getDockerCredentials401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDockerCredentialsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}