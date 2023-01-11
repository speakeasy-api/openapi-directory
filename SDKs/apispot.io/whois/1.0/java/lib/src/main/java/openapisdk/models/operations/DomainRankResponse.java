package openapisdk.models.operations;



public class DomainRankResponse {
    public String contentType;
    public DomainRankResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DomainRankResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DomainRank200ApplicationJson domainRank200ApplicationJSONObject;
    public DomainRankResponse withDomainRank200ApplicationJsonObject(DomainRank200ApplicationJson domainRank200ApplicationJSONObject) {
        this.domainRank200ApplicationJSONObject = domainRank200ApplicationJSONObject;
        return this;
    }
}