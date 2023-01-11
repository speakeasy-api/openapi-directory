package openapisdk.models.operations;



public class TinVerificationNameLookupResponse {
    public String contentType;
    public TinVerificationNameLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public TinVerificationNameLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tinVerificationNameLookup200ApplicationJSONAny;
    public TinVerificationNameLookupResponse withTinVerificationNameLookup200ApplicationJsonAny(Object tinVerificationNameLookup200ApplicationJSONAny) {
        this.tinVerificationNameLookup200ApplicationJSONAny = tinVerificationNameLookup200ApplicationJSONAny;
        return this;
    }
    public Object tinVerificationNameLookupDefaultApplicationJSONAny;
    public TinVerificationNameLookupResponse withTinVerificationNameLookupDefaultApplicationJsonAny(Object tinVerificationNameLookupDefaultApplicationJSONAny) {
        this.tinVerificationNameLookupDefaultApplicationJSONAny = tinVerificationNameLookupDefaultApplicationJSONAny;
        return this;
    }
}