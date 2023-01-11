package openapisdk.models.operations;



public class ResetAuthResponse {
    public String contentType;
    public ResetAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ResetAuthResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ResetAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ResetAuth200ApplicationJson resetAuth200ApplicationJSONObject;
    public ResetAuthResponse withResetAuth200ApplicationJsonObject(ResetAuth200ApplicationJson resetAuth200ApplicationJSONObject) {
        this.resetAuth200ApplicationJSONObject = resetAuth200ApplicationJSONObject;
        return this;
    }
    public ResetAuth401ApplicationJson resetAuth401ApplicationJSONObject;
    public ResetAuthResponse withResetAuth401ApplicationJsonObject(ResetAuth401ApplicationJson resetAuth401ApplicationJSONObject) {
        this.resetAuth401ApplicationJSONObject = resetAuth401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ResetAuthResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}