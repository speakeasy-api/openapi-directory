package openapisdk.models.operations;



public class DestroyDropletResponse {
    public String contentType;
    public DestroyDropletResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DestroyDropletResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DestroyDropletResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DestroyDroplet401ApplicationJson destroyDroplet401ApplicationJSONObject;
    public DestroyDropletResponse withDestroyDroplet401ApplicationJsonObject(DestroyDroplet401ApplicationJson destroyDroplet401ApplicationJSONObject) {
        this.destroyDroplet401ApplicationJSONObject = destroyDroplet401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DestroyDropletResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}