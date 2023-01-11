package openapisdk.models.operations;



public class NifComprehensiveResponse {
    public String contentType;
    public NifComprehensiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object nifComprehensive200ApplicationJSONAny;
    public NifComprehensiveResponse withNifComprehensive200ApplicationJsonAny(Object nifComprehensive200ApplicationJSONAny) {
        this.nifComprehensive200ApplicationJSONAny = nifComprehensive200ApplicationJSONAny;
        return this;
    }
    public Object nifComprehensiveDefaultApplicationJSONAny;
    public NifComprehensiveResponse withNifComprehensiveDefaultApplicationJsonAny(Object nifComprehensiveDefaultApplicationJSONAny) {
        this.nifComprehensiveDefaultApplicationJSONAny = nifComprehensiveDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public NifComprehensiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}