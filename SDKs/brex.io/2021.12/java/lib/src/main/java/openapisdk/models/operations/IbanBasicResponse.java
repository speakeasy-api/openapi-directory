package openapisdk.models.operations;



public class IbanBasicResponse {
    public String contentType;
    public IbanBasicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object ibanBasic200ApplicationJSONAny;
    public IbanBasicResponse withIbanBasic200ApplicationJsonAny(Object ibanBasic200ApplicationJSONAny) {
        this.ibanBasic200ApplicationJSONAny = ibanBasic200ApplicationJSONAny;
        return this;
    }
    public Object ibanBasicDefaultApplicationJSONAny;
    public IbanBasicResponse withIbanBasicDefaultApplicationJsonAny(Object ibanBasicDefaultApplicationJSONAny) {
        this.ibanBasicDefaultApplicationJSONAny = ibanBasicDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public IbanBasicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}