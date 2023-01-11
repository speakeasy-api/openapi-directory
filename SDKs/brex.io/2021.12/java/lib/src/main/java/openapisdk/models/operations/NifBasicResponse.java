package openapisdk.models.operations;



public class NifBasicResponse {
    public String contentType;
    public NifBasicResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object nifBasic200ApplicationJSONAny;
    public NifBasicResponse withNifBasic200ApplicationJsonAny(Object nifBasic200ApplicationJSONAny) {
        this.nifBasic200ApplicationJSONAny = nifBasic200ApplicationJSONAny;
        return this;
    }
    public Object nifBasicDefaultApplicationJSONAny;
    public NifBasicResponse withNifBasicDefaultApplicationJsonAny(Object nifBasicDefaultApplicationJSONAny) {
        this.nifBasicDefaultApplicationJSONAny = nifBasicDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public NifBasicResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}