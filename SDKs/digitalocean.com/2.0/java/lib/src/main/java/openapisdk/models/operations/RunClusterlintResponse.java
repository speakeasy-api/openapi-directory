package openapisdk.models.operations;



public class RunClusterlintResponse {
    public String contentType;
    public RunClusterlintResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RunClusterlintResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RunClusterlintResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object runClusterlint202ApplicationJSONAny;
    public RunClusterlintResponse withRunClusterlint202ApplicationJsonAny(Object runClusterlint202ApplicationJSONAny) {
        this.runClusterlint202ApplicationJSONAny = runClusterlint202ApplicationJSONAny;
        return this;
    }
    public RunClusterlint401ApplicationJson runClusterlint401ApplicationJSONObject;
    public RunClusterlintResponse withRunClusterlint401ApplicationJsonObject(RunClusterlint401ApplicationJson runClusterlint401ApplicationJSONObject) {
        this.runClusterlint401ApplicationJSONObject = runClusterlint401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public RunClusterlintResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}