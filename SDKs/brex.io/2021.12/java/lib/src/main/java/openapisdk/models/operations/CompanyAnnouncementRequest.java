package openapisdk.models.operations;



public class CompanyAnnouncementRequest {
    public CompanyAnnouncementPathParams pathParams;
    public CompanyAnnouncementRequest withPathParams(CompanyAnnouncementPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CompanyAnnouncementSecurity security;
    public CompanyAnnouncementRequest withSecurity(CompanyAnnouncementSecurity security) {
        this.security = security;
        return this;
    }
}