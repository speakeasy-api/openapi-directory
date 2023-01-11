package openapisdk.models.operations;



public class GetDropletLoad5MetricsResponse {
    public String contentType;
    public GetDropletLoad5MetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletLoad5MetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletLoad5MetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletLoad5Metrics200ApplicationJson getDropletLoad5Metrics200ApplicationJSONObject;
    public GetDropletLoad5MetricsResponse withGetDropletLoad5Metrics200ApplicationJsonObject(GetDropletLoad5Metrics200ApplicationJson getDropletLoad5Metrics200ApplicationJSONObject) {
        this.getDropletLoad5Metrics200ApplicationJSONObject = getDropletLoad5Metrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletLoad5Metrics401ApplicationJson getDropletLoad5Metrics401ApplicationJSONObject;
    public GetDropletLoad5MetricsResponse withGetDropletLoad5Metrics401ApplicationJsonObject(GetDropletLoad5Metrics401ApplicationJson getDropletLoad5Metrics401ApplicationJSONObject) {
        this.getDropletLoad5Metrics401ApplicationJSONObject = getDropletLoad5Metrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletLoad5MetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}