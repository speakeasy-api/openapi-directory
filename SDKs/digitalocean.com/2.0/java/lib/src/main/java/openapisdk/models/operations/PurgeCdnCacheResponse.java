package openapisdk.models.operations;



public class PurgeCdnCacheResponse {
    public String contentType;
    public PurgeCdnCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PurgeCdnCacheResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PurgeCdnCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PurgeCdnCache401ApplicationJson purgeCdnCache401ApplicationJSONObject;
    public PurgeCdnCacheResponse withPurgeCdnCache401ApplicationJsonObject(PurgeCdnCache401ApplicationJson purgeCdnCache401ApplicationJSONObject) {
        this.purgeCdnCache401ApplicationJSONObject = purgeCdnCache401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PurgeCdnCacheResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}