package openapisdk.models.operations;



public class DestroyDropletsByTagResponse {
    public String contentType;
    public DestroyDropletsByTagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public DestroyDropletsByTagResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public DestroyDropletsByTagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DestroyDropletsByTag401ApplicationJson destroyDropletsByTag401ApplicationJSONObject;
    public DestroyDropletsByTagResponse withDestroyDropletsByTag401ApplicationJsonObject(DestroyDropletsByTag401ApplicationJson destroyDropletsByTag401ApplicationJSONObject) {
        this.destroyDropletsByTag401ApplicationJSONObject = destroyDropletsByTag401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public DestroyDropletsByTagResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}