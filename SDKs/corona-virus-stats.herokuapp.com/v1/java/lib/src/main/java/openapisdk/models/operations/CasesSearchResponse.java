package openapisdk.models.operations;



public class CasesSearchResponse {
    public String contentType;
    public CasesSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CasesSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public CasesSearch200ApplicationJson casesSearch200ApplicationJSONObject;
    public CasesSearchResponse withCasesSearch200ApplicationJsonObject(CasesSearch200ApplicationJson casesSearch200ApplicationJSONObject) {
        this.casesSearch200ApplicationJSONObject = casesSearch200ApplicationJSONObject;
        return this;
    }
}