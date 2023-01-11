package openapisdk.models.operations;



public class GetDropletLoad15MetricsResponse {
    public String contentType;
    public GetDropletLoad15MetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletLoad15MetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletLoad15MetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletLoad15Metrics200ApplicationJson getDropletLoad15Metrics200ApplicationJSONObject;
    public GetDropletLoad15MetricsResponse withGetDropletLoad15Metrics200ApplicationJsonObject(GetDropletLoad15Metrics200ApplicationJson getDropletLoad15Metrics200ApplicationJSONObject) {
        this.getDropletLoad15Metrics200ApplicationJSONObject = getDropletLoad15Metrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletLoad15Metrics401ApplicationJson getDropletLoad15Metrics401ApplicationJSONObject;
    public GetDropletLoad15MetricsResponse withGetDropletLoad15Metrics401ApplicationJsonObject(GetDropletLoad15Metrics401ApplicationJson getDropletLoad15Metrics401ApplicationJSONObject) {
        this.getDropletLoad15Metrics401ApplicationJSONObject = getDropletLoad15Metrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletLoad15MetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}