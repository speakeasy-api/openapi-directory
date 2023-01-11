package openapisdk.models.operations;



public class GetDropletMemoryCachedMetricsResponse {
    public String contentType;
    public GetDropletMemoryCachedMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletMemoryCachedMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletMemoryCachedMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletMemoryCachedMetrics200ApplicationJson getDropletMemoryCachedMetrics200ApplicationJSONObject;
    public GetDropletMemoryCachedMetricsResponse withGetDropletMemoryCachedMetrics200ApplicationJsonObject(GetDropletMemoryCachedMetrics200ApplicationJson getDropletMemoryCachedMetrics200ApplicationJSONObject) {
        this.getDropletMemoryCachedMetrics200ApplicationJSONObject = getDropletMemoryCachedMetrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletMemoryCachedMetrics401ApplicationJson getDropletMemoryCachedMetrics401ApplicationJSONObject;
    public GetDropletMemoryCachedMetricsResponse withGetDropletMemoryCachedMetrics401ApplicationJsonObject(GetDropletMemoryCachedMetrics401ApplicationJson getDropletMemoryCachedMetrics401ApplicationJSONObject) {
        this.getDropletMemoryCachedMetrics401ApplicationJSONObject = getDropletMemoryCachedMetrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletMemoryCachedMetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}