package openapisdk.models.operations;



public class DriveGroupsAllRequest {
    public DriveGroupsAllQueryParams queryParams;
    public DriveGroupsAllRequest withQueryParams(DriveGroupsAllQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DriveGroupsAllHeaders headers;
    public DriveGroupsAllRequest withHeaders(DriveGroupsAllHeaders headers) {
        this.headers = headers;
        return this;
    }
    public DriveGroupsAllSecurity security;
    public DriveGroupsAllRequest withSecurity(DriveGroupsAllSecurity security) {
        this.security = security;
        return this;
    }
}