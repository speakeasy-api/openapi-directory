package openapisdk.models.operations;



public class DriveGroupsDeleteRequest {
    public DriveGroupsDeletePathParams pathParams;
    public DriveGroupsDeleteRequest withPathParams(DriveGroupsDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DriveGroupsDeleteQueryParams queryParams;
    public DriveGroupsDeleteRequest withQueryParams(DriveGroupsDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveGroupsDeleteHeaders headers;
    public DriveGroupsDeleteRequest withHeaders(DriveGroupsDeleteHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DriveGroupsDeleteSecurity security;
    public DriveGroupsDeleteRequest withSecurity(DriveGroupsDeleteSecurity security) {
        this.security = security;
        return this;
    }
}