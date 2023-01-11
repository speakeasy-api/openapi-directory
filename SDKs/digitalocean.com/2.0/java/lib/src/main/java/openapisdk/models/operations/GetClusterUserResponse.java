package openapisdk.models.operations;



public class GetClusterUserResponse {
    public String contentType;
    public GetClusterUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetClusterUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetClusterUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetClusterUser200ApplicationJson getClusterUser200ApplicationJSONObject;
    public GetClusterUserResponse withGetClusterUser200ApplicationJsonObject(GetClusterUser200ApplicationJson getClusterUser200ApplicationJSONObject) {
        this.getClusterUser200ApplicationJSONObject = getClusterUser200ApplicationJSONObject;
        return this;
    }
    public GetClusterUser401ApplicationJson getClusterUser401ApplicationJSONObject;
    public GetClusterUserResponse withGetClusterUser401ApplicationJsonObject(GetClusterUser401ApplicationJson getClusterUser401ApplicationJSONObject) {
        this.getClusterUser401ApplicationJSONObject = getClusterUser401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetClusterUserResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}