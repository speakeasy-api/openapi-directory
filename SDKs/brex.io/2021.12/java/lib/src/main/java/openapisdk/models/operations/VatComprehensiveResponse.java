package openapisdk.models.operations;



public class VatComprehensiveResponse {
    public String contentType;
    public VatComprehensiveResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VatComprehensiveResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object vatComprehensive200ApplicationJSONAny;
    public VatComprehensiveResponse withVatComprehensive200ApplicationJsonAny(Object vatComprehensive200ApplicationJSONAny) {
        this.vatComprehensive200ApplicationJSONAny = vatComprehensive200ApplicationJSONAny;
        return this;
    }
    public Object vatComprehensiveDefaultApplicationJSONAny;
    public VatComprehensiveResponse withVatComprehensiveDefaultApplicationJsonAny(Object vatComprehensiveDefaultApplicationJSONAny) {
        this.vatComprehensiveDefaultApplicationJSONAny = vatComprehensiveDefaultApplicationJSONAny;
        return this;
    }
}