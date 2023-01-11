package openapisdk.models.operations;



public class PatchVpcResponse {
    public String contentType;
    public PatchVpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PatchVpcResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PatchVpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PatchVpc200ApplicationJson patchVpc200ApplicationJSONObject;
    public PatchVpcResponse withPatchVpc200ApplicationJsonObject(PatchVpc200ApplicationJson patchVpc200ApplicationJSONObject) {
        this.patchVpc200ApplicationJSONObject = patchVpc200ApplicationJSONObject;
        return this;
    }
    public PatchVpc401ApplicationJson patchVpc401ApplicationJSONObject;
    public PatchVpcResponse withPatchVpc401ApplicationJsonObject(PatchVpc401ApplicationJson patchVpc401ApplicationJSONObject) {
        this.patchVpc401ApplicationJSONObject = patchVpc401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PatchVpcResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}