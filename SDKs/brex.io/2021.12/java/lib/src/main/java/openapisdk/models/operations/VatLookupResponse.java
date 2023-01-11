package openapisdk.models.operations;



public class VatLookupResponse {
    public String contentType;
    public VatLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VatLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object vatLookup200ApplicationJSONAny;
    public VatLookupResponse withVatLookup200ApplicationJsonAny(Object vatLookup200ApplicationJSONAny) {
        this.vatLookup200ApplicationJSONAny = vatLookup200ApplicationJSONAny;
        return this;
    }
    public Object vatLookupDefaultApplicationJSONAny;
    public VatLookupResponse withVatLookupDefaultApplicationJsonAny(Object vatLookupDefaultApplicationJSONAny) {
        this.vatLookupDefaultApplicationJSONAny = vatLookupDefaultApplicationJSONAny;
        return this;
    }
}