package openapisdk.models.operations;



public class GetAdsByInventoryReferenceResponse {
    public openapisdk.models.shared.Ads ads;
    public GetAdsByInventoryReferenceResponse withAds(openapisdk.models.shared.Ads ads) {
        this.ads = ads;
        return this;
    }
    public String contentType;
    public GetAdsByInventoryReferenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAdsByInventoryReferenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}