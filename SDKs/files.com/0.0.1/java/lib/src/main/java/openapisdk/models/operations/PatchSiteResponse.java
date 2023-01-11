package openapisdk.models.operations;



public class PatchSiteResponse {
    public String contentType;
    public PatchSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SiteEntity siteEntity;
    public PatchSiteResponse withSiteEntity(openapisdk.models.shared.SiteEntity siteEntity) {
        this.siteEntity = siteEntity;
        return this;
    }
    public Long statusCode;
    public PatchSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}