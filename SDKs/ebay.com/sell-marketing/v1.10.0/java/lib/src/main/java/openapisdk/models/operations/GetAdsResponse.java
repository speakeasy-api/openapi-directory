package openapisdk.models.operations;



public class GetAdsResponse {
    public openapisdk.models.shared.AdPagedCollection adPagedCollection;
    public GetAdsResponse withAdPagedCollection(openapisdk.models.shared.AdPagedCollection adPagedCollection) {
        this.adPagedCollection = adPagedCollection;
        return this;
    }
    public String contentType;
    public GetAdsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}