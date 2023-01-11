package openapisdk.models.operations;



public class GetItemUsagesResponse {
    public String contentType;
    public GetItemUsagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetItemUsagesResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetItemUsagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getItemUsages200ApplicationJSONAny;
    public GetItemUsagesResponse withGetItemUsages200ApplicationJsonAny(Object getItemUsages200ApplicationJSONAny) {
        this.getItemUsages200ApplicationJSONAny = getItemUsages200ApplicationJSONAny;
        return this;
    }
}