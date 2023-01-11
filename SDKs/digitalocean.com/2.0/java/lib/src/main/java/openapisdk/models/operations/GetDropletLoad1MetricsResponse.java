package openapisdk.models.operations;



public class GetDropletLoad1MetricsResponse {
    public String contentType;
    public GetDropletLoad1MetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDropletLoad1MetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDropletLoad1MetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDropletLoad1Metrics200ApplicationJson getDropletLoad1Metrics200ApplicationJSONObject;
    public GetDropletLoad1MetricsResponse withGetDropletLoad1Metrics200ApplicationJsonObject(GetDropletLoad1Metrics200ApplicationJson getDropletLoad1Metrics200ApplicationJSONObject) {
        this.getDropletLoad1Metrics200ApplicationJSONObject = getDropletLoad1Metrics200ApplicationJSONObject;
        return this;
    }
    public GetDropletLoad1Metrics401ApplicationJson getDropletLoad1Metrics401ApplicationJSONObject;
    public GetDropletLoad1MetricsResponse withGetDropletLoad1Metrics401ApplicationJsonObject(GetDropletLoad1Metrics401ApplicationJson getDropletLoad1Metrics401ApplicationJSONObject) {
        this.getDropletLoad1Metrics401ApplicationJSONObject = getDropletLoad1Metrics401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDropletLoad1MetricsResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}