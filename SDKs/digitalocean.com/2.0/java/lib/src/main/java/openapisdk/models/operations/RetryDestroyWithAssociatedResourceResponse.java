package openapisdk.models.operations;



public class RetryDestroyWithAssociatedResourceResponse {
    public String contentType;
    public RetryDestroyWithAssociatedResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public RetryDestroyWithAssociatedResourceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public RetryDestroyWithAssociatedResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public RetryDestroyWithAssociatedResource401ApplicationJson retryDestroyWithAssociatedResource401ApplicationJSONObject;
    public RetryDestroyWithAssociatedResourceResponse withRetryDestroyWithAssociatedResource401ApplicationJsonObject(RetryDestroyWithAssociatedResource401ApplicationJson retryDestroyWithAssociatedResource401ApplicationJSONObject) {
        this.retryDestroyWithAssociatedResource401ApplicationJSONObject = retryDestroyWithAssociatedResource401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public RetryDestroyWithAssociatedResourceResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}