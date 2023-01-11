package openapisdk.models.operations;



public class GetSearchResponse {
    public String contentType;
    public GetSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getSearch200ApplicationJSONAny;
    public GetSearchResponse withGetSearch200ApplicationJsonAny(Object getSearch200ApplicationJSONAny) {
        this.getSearch200ApplicationJSONAny = getSearch200ApplicationJSONAny;
        return this;
    }
}