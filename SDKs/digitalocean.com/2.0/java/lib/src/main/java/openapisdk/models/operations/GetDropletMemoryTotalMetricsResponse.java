package openapisdk.models.operations;



public class GetDropletMemoryTotalMetricsResponse {
    public String contentType;
    public GetDropletMemoryTotalMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletMemoryTotalMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletMemoryTotalMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletMemoryTotalMetrics200ApplicationJson getDropletMemoryTotalMetrics200ApplicationJSONObject;
    public GetDropletMemoryTotalMetricsResponse withGetDropletMemoryTotalMetrics200ApplicationJsonObject(GetDropletMemoryTotalMetrics200ApplicationJson getDropletMemoryTotalMetrics200ApplicationJSONObject) {
        this.getDropletMemoryTotalMetrics200ApplicationJSONObject = getDropletMemoryTotalMetrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletMemoryTotalMetrics401ApplicationJson getDropletMemoryTotalMetrics401ApplicationJSONObject;
    public GetDropletMemoryTotalMetricsResponse withGetDropletMemoryTotalMetrics401ApplicationJsonObject(GetDropletMemoryTotalMetrics401ApplicationJson getDropletMemoryTotalMetrics401ApplicationJSONObject) {
        this.getDropletMemoryTotalMetrics401ApplicationJSONObject = getDropletMemoryTotalMetrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletMemoryTotalMetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}