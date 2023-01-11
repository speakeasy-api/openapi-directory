package openapisdk.models.operations;



public class VatBasicResponse {
    public String contentType;
    public VatBasicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VatBasicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object vatBasic200ApplicationJSONAny;
    public VatBasicResponse withVatBasic200ApplicationJsonAny(Object vatBasic200ApplicationJSONAny) {
        this.vatBasic200ApplicationJSONAny = vatBasic200ApplicationJSONAny;
        return this;
    }
    public Object vatBasicDefaultApplicationJSONAny;
    public VatBasicResponse withVatBasicDefaultApplicationJsonAny(Object vatBasicDefaultApplicationJSONAny) {
        this.vatBasicDefaultApplicationJSONAny = vatBasicDefaultApplicationJSONAny;
        return this;
    }
}