package openapisdk.models.operations;



public class GetVpcResponse {
    public String contentType;
    public GetVpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetVpcResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetVpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetVpc200ApplicationJson getVpc200ApplicationJSONObject;
    public GetVpcResponse withGetVpc200ApplicationJsonObject(GetVpc200ApplicationJson getVpc200ApplicationJSONObject) {
        this.getVpc200ApplicationJSONObject = getVpc200ApplicationJSONObject;
        return this;
    }
    public GetVpc401ApplicationJson getVpc401ApplicationJSONObject;
    public GetVpcResponse withGetVpc401ApplicationJsonObject(GetVpc401ApplicationJson getVpc401ApplicationJSONObject) {
        this.getVpc401ApplicationJSONObject = getVpc401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetVpcResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}