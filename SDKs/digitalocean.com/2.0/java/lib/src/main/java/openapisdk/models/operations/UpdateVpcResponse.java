package openapisdk.models.operations;



public class UpdateVpcResponse {
    public String contentType;
    public UpdateVpcResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public UpdateVpcResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public UpdateVpcResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateVpc200ApplicationJson updateVpc200ApplicationJSONObject;
    public UpdateVpcResponse withUpdateVpc200ApplicationJsonObject(UpdateVpc200ApplicationJson updateVpc200ApplicationJSONObject) {
        this.updateVpc200ApplicationJSONObject = updateVpc200ApplicationJSONObject;
        return this;
    }
    public UpdateVpc401ApplicationJson updateVpc401ApplicationJSONObject;
    public UpdateVpcResponse withUpdateVpc401ApplicationJsonObject(UpdateVpc401ApplicationJson updateVpc401ApplicationJSONObject) {
        this.updateVpc401ApplicationJSONObject = updateVpc401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public UpdateVpcResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}