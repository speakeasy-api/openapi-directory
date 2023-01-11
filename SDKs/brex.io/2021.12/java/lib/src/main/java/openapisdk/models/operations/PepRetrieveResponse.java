package openapisdk.models.operations;



public class PepRetrieveResponse {
    public String contentType;
    public PepRetrieveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pepRetrieve200ApplicationJSONAny;
    public PepRetrieveResponse withPepRetrieve200ApplicationJsonAny(Object pepRetrieve200ApplicationJSONAny) {
        this.pepRetrieve200ApplicationJSONAny = pepRetrieve200ApplicationJSONAny;
        return this;
    }
    public Object pepRetrieveDefaultApplicationJSONAny;
    public PepRetrieveResponse withPepRetrieveDefaultApplicationJsonAny(Object pepRetrieveDefaultApplicationJSONAny) {
        this.pepRetrieveDefaultApplicationJSONAny = pepRetrieveDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public PepRetrieveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}