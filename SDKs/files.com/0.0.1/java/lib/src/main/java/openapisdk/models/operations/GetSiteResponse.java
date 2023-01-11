package openapisdk.models.operations;



public class GetSiteResponse {
    public String contentType;
    public GetSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteEntity siteEntity;
    public GetSiteResponse withSiteEntity(openapisdk.models.shared.SiteEntity siteEntity) {
        this.siteEntity = siteEntity;
        return this;
    }
    public Long statusCode;
    public GetSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}