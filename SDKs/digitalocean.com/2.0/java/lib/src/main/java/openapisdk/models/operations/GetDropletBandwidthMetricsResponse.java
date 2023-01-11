package openapisdk.models.operations;



public class GetDropletBandwidthMetricsResponse {
    public String contentType;
    public GetDropletBandwidthMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletBandwidthMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletBandwidthMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletBandwidthMetrics200ApplicationJson getDropletBandwidthMetrics200ApplicationJSONObject;
    public GetDropletBandwidthMetricsResponse withGetDropletBandwidthMetrics200ApplicationJsonObject(GetDropletBandwidthMetrics200ApplicationJson getDropletBandwidthMetrics200ApplicationJSONObject) {
        this.getDropletBandwidthMetrics200ApplicationJSONObject = getDropletBandwidthMetrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletBandwidthMetrics401ApplicationJson getDropletBandwidthMetrics401ApplicationJSONObject;
    public GetDropletBandwidthMetricsResponse withGetDropletBandwidthMetrics401ApplicationJsonObject(GetDropletBandwidthMetrics401ApplicationJson getDropletBandwidthMetrics401ApplicationJSONObject) {
        this.getDropletBandwidthMetrics401ApplicationJSONObject = getDropletBandwidthMetrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletBandwidthMetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}