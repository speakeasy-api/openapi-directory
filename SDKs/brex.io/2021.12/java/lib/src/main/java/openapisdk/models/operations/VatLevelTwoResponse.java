package openapisdk.models.operations;



public class VatLevelTwoResponse {
    public String contentType;
    public VatLevelTwoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public VatLevelTwoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object vatLevelTwo200ApplicationJSONAny;
    public VatLevelTwoResponse withVatLevelTwo200ApplicationJsonAny(Object vatLevelTwo200ApplicationJSONAny) {
        this.vatLevelTwo200ApplicationJSONAny = vatLevelTwo200ApplicationJSONAny;
        return this;
    }
    public Object vatLevelTwoDefaultApplicationJSONAny;
    public VatLevelTwoResponse withVatLevelTwoDefaultApplicationJsonAny(Object vatLevelTwoDefaultApplicationJSONAny) {
        this.vatLevelTwoDefaultApplicationJSONAny = vatLevelTwoDefaultApplicationJSONAny;
        return this;
    }
}