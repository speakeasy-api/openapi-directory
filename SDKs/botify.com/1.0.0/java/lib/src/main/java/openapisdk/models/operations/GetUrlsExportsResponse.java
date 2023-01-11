package openapisdk.models.operations;



public class GetUrlsExportsResponse {
    public String contentType;
    public GetUrlsExportsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DefaultPayload defaultPayload;
    public GetUrlsExportsResponse withDefaultPayload(openapisdk.models.shared.DefaultPayload defaultPayload) {
        this.defaultPayload = defaultPayload;
        return this;
    }
    public Long statusCode;
    public GetUrlsExportsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetUrlsExports200ApplicationJson getUrlsExports200ApplicationJSONObject;
    public GetUrlsExportsResponse withGetUrlsExports200ApplicationJsonObject(GetUrlsExports200ApplicationJson getUrlsExports200ApplicationJSONObject) {
        this.getUrlsExports200ApplicationJSONObject = getUrlsExports200ApplicationJSONObject;
        return this;
    }
}