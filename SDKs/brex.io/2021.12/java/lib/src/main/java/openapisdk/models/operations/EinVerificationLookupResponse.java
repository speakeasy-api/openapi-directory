package openapisdk.models.operations;



public class EinVerificationLookupResponse {
    public String contentType;
    public EinVerificationLookupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object einVerificationLookup200ApplicationJSONAny;
    public EinVerificationLookupResponse withEinVerificationLookup200ApplicationJsonAny(Object einVerificationLookup200ApplicationJSONAny) {
        this.einVerificationLookup200ApplicationJSONAny = einVerificationLookup200ApplicationJSONAny;
        return this;
    }
    public Object einVerificationLookupDefaultApplicationJSONAny;
    public EinVerificationLookupResponse withEinVerificationLookupDefaultApplicationJsonAny(Object einVerificationLookupDefaultApplicationJSONAny) {
        this.einVerificationLookupDefaultApplicationJSONAny = einVerificationLookupDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public EinVerificationLookupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}