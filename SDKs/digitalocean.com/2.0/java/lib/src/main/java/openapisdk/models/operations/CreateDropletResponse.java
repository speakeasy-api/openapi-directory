package openapisdk.models.operations;



public class CreateDropletResponse {
    public String contentType;
    public CreateDropletResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public CreateDropletResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public CreateDropletResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object createDroplet202ApplicationJSONOneOf;
    public CreateDropletResponse withCreateDroplet202ApplicationJsonOneOf(Object createDroplet202ApplicationJSONOneOf) {
        this.createDroplet202ApplicationJSONOneOf = createDroplet202ApplicationJSONOneOf;
        return this;
    }
    public CreateDroplet401ApplicationJson createDroplet401ApplicationJSONObject;
    public CreateDropletResponse withCreateDroplet401ApplicationJsonObject(CreateDroplet401ApplicationJson createDroplet401ApplicationJSONObject) {
        this.createDroplet401ApplicationJSONObject = createDroplet401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public CreateDropletResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}