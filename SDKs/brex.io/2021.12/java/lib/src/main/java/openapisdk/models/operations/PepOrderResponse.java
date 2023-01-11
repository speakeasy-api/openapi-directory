package openapisdk.models.operations;



public class PepOrderResponse {
    public String contentType;
    public PepOrderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pepOrder200ApplicationJSONAny;
    public PepOrderResponse withPepOrder200ApplicationJsonAny(Object pepOrder200ApplicationJSONAny) {
        this.pepOrder200ApplicationJSONAny = pepOrder200ApplicationJSONAny;
        return this;
    }
    public Object pepOrderDefaultApplicationJSONAny;
    public PepOrderResponse withPepOrderDefaultApplicationJsonAny(Object pepOrderDefaultApplicationJSONAny) {
        this.pepOrderDefaultApplicationJSONAny = pepOrderDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public PepOrderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}