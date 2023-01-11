package openapisdk.models.operations;



public class ArchiveClassRequest {
    public ArchiveClassPathParams pathParams;
    public ArchiveClassRequest withPathParams(ArchiveClassPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArchiveClassSecurity security;
    public ArchiveClassRequest withSecurity(ArchiveClassSecurity security) {
        this.security = security;
        return this;
    }
}